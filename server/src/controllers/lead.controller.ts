import { Request, Response } from "express";

import Lead from "../models/Lead.model";

export const createLead = async (
  req: Request,
  res: Response
) => {
  try {

    const lead = await Lead.create(
      req.body
    );

    res.status(201).json({
      message:
        "Lead created successfully",

      lead,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error,
    });

  }
};

export const getLeads = async (
  req: Request,
  res: Response
) => {
  try {

    const {
      status,
      priority,
      search,
      sort,
      page = 1,
    } = req.query;

    const query: any = {};

    if (status) {
      query.status = status;
    }

    if (priority) {
      query.priority = priority;
    }

    if (search) {

      query.$or = [

        {
          companyName: {
            $regex: search,
            $options: "i",
          },
        },

        {
          contactPerson: {
            $regex: search,
            $options: "i",
          },
        },

      ];
    }

    const limit = 10;

    const skip =
      (Number(page) - 1) * limit;

    const sortOption: any =
      sort === "oldest"
        ? { createdAt: 1 }
        : { createdAt: -1 };

    const leads = await Lead.find(
      query
    )

      .sort(sortOption)

      .skip(skip)

      .limit(limit)

      .populate(
        "assignedTo",
        "name email"
      );

    const total =
      await Lead.countDocuments(
        query
      );

    res.status(200).json({

      total,

      currentPage:
        Number(page),

      totalPages:
        Math.ceil(total / limit),

      leads,

    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error,
    });

  }
};

export const assignLead = async (
  req: Request,
  res: Response
) => {
  try {

    const { leadId } = req.params;

    const { assignedTo } =
      req.body;

    const updatedLead =
      await Lead.findByIdAndUpdate(

        leadId,

        {
          assignedTo,
        },

        {
          new: true,
        }

      ).populate(
        "assignedTo",
        "name email"
      );

    res.status(200).json({

      message:
        "Lead assigned successfully",

      lead: updatedLead,

    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error,
    });

  }
};

export const updateLeadStatus = async (
  req: Request,
  res: Response
) => {
  try {

    const { leadId } = req.params;

    const { status } = req.body;

    const updatedLead =
      await Lead.findByIdAndUpdate(

        leadId,

        {
          status,
        },

        {
          new: true,
        }

      );

    res.status(200).json({

      message:
        "Lead status updated",

      lead: updatedLead,

    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error,
    });

  }
};

export const updateLead = async (
  req: Request,
  res: Response
) => {
  try {

    const { leadId } = req.params;

    const updatedLead =
      await Lead.findByIdAndUpdate(

        leadId,

        req.body,

        {
          new: true,
        }

      );

    res.status(200).json({

      message:
        "Lead updated successfully",

      lead: updatedLead,

    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error,
    });

  }
};

export const deleteLead = async (
  req: Request,
  res: Response
) => {
  try {

    const { leadId } = req.params;

    await Lead.findByIdAndDelete(
      leadId
    );

    res.status(200).json({
      message:
        "Lead deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error,
    });

  }
};
import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;

  status:
    | "new"
    | "contacted"
    | "qualified"
    | "proposal"
    | "closed";

  priority:
    | "low"
    | "medium"
    | "high";

  assignedTo?: mongoose.Types.ObjectId;

  notes?: string;
}

const leadSchema = new Schema<ILead>(
  {
    companyName: {
      type: String,
      required: true,
    },

    contactPerson: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    status: {
      type: String,

      enum: [
        "new",
        "contacted",
        "qualified",
        "proposal",
        "closed",
      ],

      default: "new",
    },

    priority: {
      type: String,

      enum: [
        "low",
        "medium",
        "high",
      ],

      default: "medium",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    notes: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const Lead = mongoose.model<ILead>(
  "Lead",
  leadSchema
);

export default Lead;
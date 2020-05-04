const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const practise = new Schema({
  enumerationType: { type: String },
  npi: { type: String, unique: true },
  last_updated_epoch: { type: String },
  created_epoch: { type: String },
  basic: {
    organization_name: { type: String },
    organizational_subpart: { type: String },
    enumeration_date: { type: String },
    last_updated: { type: String },
    status: { type: String },
    credential: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    middle_name: { type: String },
    telephone_number: { type: String },
    title_or_position: { type: String },
    name_prefix: { type: String },
    name_suffix: { type: String },
    sole_proprietor: { type: String },
    gender: { type: String },
    name: { type: String }
  },
  other_names: { type: Object },
  address: [{ type: Schema.Types.ObjectId, ref: "doctorAddress" }],
  taxonomies: [{ type: Schema.Types.ObjectId, ref: "Taxonomies" }],
  practiceLocation: [{ type: Schema.Types.ObjectId, ref: "doctorAddress" }],

  practise: { type: String },
  organizationName: { type: String },
  description: { type: String },
  identifiers: { type: Object },
  steps: { type: Array },
  email: { type: String },
  website: { type: String },
  taxId: { type: String },
  notes: { type: String },
  payToAddress: { type: String },
  payToAddress2: { type: String },
  payToCity: { type: String },
  payToState: { type: String },
  payToZipCode: { type: String },
  locationId: { type: Schema.Types.ObjectId, ref: "Location" },
  base_booking_parameters: {
    specialtyId: { type: Number },
    procedureId: { type: Number },
    insuranceCarrier: { type: Number },
    insurancePlan: { type: Number }
  },
  is_in_network: { type: Boolean, default: true },
  is_superDoc: { type: Boolean, default: false }, //Shows whether doctor is currently open for taking patients
  next_timeslot: { type: Object },
  location_ids: { type: Array },
  main_specialty_id: { type: Number },
  profile_url: { type: String },
  rating: { type: Object },
  isActive: { type: Boolean, default: true },
  isApproved: { type: Boolean, default: false },
  availability: { type: Array },
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointments" }],
  specialty: { type: String },
  specialtyName: { type: String },
  phone: { type: String },
  password: {
    type: String
  },
  experience: { type: String },
  dob: { type: Date },
  picture: { type: Array },
  establishmentName: { type: String },
  city: { type: String },
  country: { type: String },
  state: { type: String },
  identityProof: { type: String },
  medicalProof: { type: String },
  availability: [],
  createdOn: { type: Date, default: Date.now },
  availDate: { type: Date },
  savedCards: { type: Object },
  fee: { type: String },
  customerProfile: { type: String },
  renewDate: { type: Date },
  passwordToken: { type: String },
  passwordExpires: { type: Date },
  profileStatus: { type: Boolean }, //shows whether doctor is active or not
  autoApprove: { type: Boolean }, //Auto approve appointments
  question: [{ type: Schema.Types.ObjectId, ref: "question" }],
  appointmentsString: { type: String }, //holds the payload by the doctor for the appointment in string format
  totalPatient: { type: String }, //Shows total number of patient viewed
  first_name: { type: String },
  last_name: { type: String },
  video: { type: String }
});

module.exports = mongoose.model("Practise", practise);

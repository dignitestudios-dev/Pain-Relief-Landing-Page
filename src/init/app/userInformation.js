export const userInfoInitialValues = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  address: "", // instead of using 'number' again for home address
};

export const providerInitialValues = {
  name: "",
  clinicName: "",
  email: "",
  number: "",
  providerNPI: "",
  website: "",
  description: "",
  userImage: "",
};

export const EditProfileproviderInitialValues = {
  name: "",
  clinicName: "",
  email: "",
  phone: "", // ✅ changed from number ➝ phone
  npi: "", // ✅ changed from providerNPI ➝ npi
  website: "",
  description: "",
};

export const changePassValues = {
  currentPassword: "",
  newPassword: "",
  cPassword: "",
};
export const reportIssueValues = {
  description: "",
};

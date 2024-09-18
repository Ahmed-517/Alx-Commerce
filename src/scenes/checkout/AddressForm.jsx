import { useMediaQuery, TextField, Box } from "@mui/material";
import { getIn } from "formik";

function AddressForm({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  // return (
  //   <Box
  //     display="grid"
  //     gap="15px"
  //     gridTemplateColumns="repeat(4, minmax(0, 1fr))"
  //     sx={{
  //       "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
  //     }}
  //   >
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="First Name"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.firstName}
  //       name={formattedName("firstName")}
  //       error={formattedError("firstName")}
  //       helperText={formattedHelper("firstName")}
  //       sx={{ gridColumn: "span 2" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="Last Name"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.lastName}
  //       name={formattedName("lastName")}
  //       error={formattedError("lastName")}
  //       helperText={formattedHelper("lastName")}
  //       sx={{ gridColumn: "span 2" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="Country"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.country}
  //       name={formattedName("country")}
  //       error={formattedError("country")}
  //       helperText={formattedHelper("country")}
  //       sx={{ gridColumn: "span 4" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="Street Address"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.street1}
  //       name={formattedName("street1")}
  //       error={formattedError("street1")}
  //       helperText={formattedHelper("street1")}
  //       sx={{ gridColumn: "span 2" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="Street Address 2 (optional)"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.street2}
  //       name={formattedName("street2")}
  //       error={formattedError("street2")}
  //       helperText={formattedHelper("street2")}
  //       sx={{ gridColumn: "span 2" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="City"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.city}
  //       name={formattedName("city")}
  //       error={formattedError("city")}
  //       helperText={formattedHelper("city")}
  //       sx={{ gridColumn: "span 2" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="State"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.State}
  //       name={formattedName("state")}
  //       error={formattedError("state")}
  //       helperText={formattedHelper("state")}
  //       sx={{ gridColumn: "1fr" }}
  //     />
  //     <TextField
  //       fullWidth
  //       type="text"
  //       label="Zip Code"
  //       onBlur={handleBlur}
  //       onChange={handleChange}
  //       value={values.zipCode}
  //       name={formattedName("zipCode")}
  //       error={formattedError("zipCode")}
  //       helperText={formattedHelper("zipCode")}
  //       sx={{ gridColumn: "1fr" }}
  //     />
  //   </Box>
  // );

  return (
    <div
      className={`grid gap-4 grid-cols-4 ${isNonMobile ? "" : "grid-cols-1"}`}
    >
      <div className="col-span-2">
        <input
          type="text"
          placeholder="First Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name={formattedName("firstName")}
          className={`w-full border ${
            formattedError("firstName") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("firstName")}</p>
      </div>

      <div className="col-span-2">
        <input
          type="text"
          placeholder="Last Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name={formattedName("lastName")}
          className={`w-full border ${
            formattedError("lastName") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("lastName")}</p>
      </div>

      <div className="col-span-4">
        <input
          type="text"
          placeholder="Country"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          name={formattedName("country")}
          className={`w-full border ${
            formattedError("country") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("country")}</p>
      </div>

      <div className="col-span-2">
        <input
          type="text"
          placeholder="Street Address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street1}
          name={formattedName("street1")}
          className={`w-full border ${
            formattedError("street1") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("street1")}</p>
      </div>

      <div className="col-span-2">
        <input
          type="text"
          placeholder="Street Address 2 (optional)"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street2}
          name={formattedName("street2")}
          className={`w-full border ${
            formattedError("street2") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("street2")}</p>
      </div>

      <div className="col-span-2">
        <input
          type="text"
          placeholder="City"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.city}
          name={formattedName("city")}
          className={`w-full border ${
            formattedError("city") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("city")}</p>
      </div>

      <div className="col-span-1">
        <input
          type="text"
          placeholder="State"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.state}
          name={formattedName("state")}
          className={`w-full border ${
            formattedError("state") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("state")}</p>
      </div>

      <div className="col-span-1">
        <input
          type="text"
          placeholder="Zip Code"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.zipCode}
          name={formattedName("zipCode")}
          className={`w-full border ${
            formattedError("zipCode") ? "border-red-500" : "border-gray-300"
          } p-2`}
        />
        <p className="text-red-500 text-sm">{formattedHelper("zipCode")}</p>
      </div>
    </div>
  );
}

export default AddressForm;

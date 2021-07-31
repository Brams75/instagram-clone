import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  return (
    <>
      <label
        className="w-full m-1 border-solid border-2 border-gray-200 rounded"
        htmlFor={props.id || props.name}
      >
        {/* eslint-disable  */}
        <input className=" w-full p-2 text-sm " {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="text-red-500">{meta.error}</div> : null}
    </>
  );
};

export default MyTextInput;

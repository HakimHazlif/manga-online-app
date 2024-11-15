import React, { useEffect, useRef, useState } from "react";

const InputText = ({ type, title, value, setChange, labelText, status }) => {
  const inputRef = useRef(value);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (status === 1 && !inputRef.current.value) {
      setHasError(true);
    }
  }, [status]);

  /*
  function styleLabelText() {
    if (inputRef.current.value) {
      return "top-0 right-4";
    } else {
      return "right-2 top-[50%]";
    }
  }
*/
  return (
    <div className="relative">
      <input
        ref={inputRef}
        className={`peer w-full text-sm placeholder:text-sm px-5 py-3 outline-none rounded-xl focus:bg-white ${
          hasError
            ? "bg-red-200 placeholder:text-red-600 border-red-600"
            : "bg-white"
        } ${inputRef.current.value && "border-light-green-100"}`}
        type={type}
        name={title}
        id={title}
        value={value}
        placeholder={labelText}
        onFocus={() => setHasError(false)}
        onChange={setChange}
      />
      {hasError && (
        <p className="mt-1 mr-5 text-sm text-red-600 font-kufi">
          * يجب ملء هذا الحقل
        </p>
      )}
      <label
        htmlFor={title}
        className={`hidden absolute transform -translate-y-[50%] pointer-events-none transition-all duration-300 peer-focus:-top-[1px] peer-focus:right-4 ${
          hasError ? "text-red-700 top-[22px]" : "text-light-green-100"
        } ${
          !inputRef.current.value ? "right-2 top-[22px]" : "top-0 right-4"
        }`}
      >
        <div className="w-full relative">
          <p className="font-kufi mr-1">{labelText}</p>
          <div className="absolute h-5 w-[102%] top-0 -z-10">
            <div className={`w-full h-1/2`}></div>
            <div
              className={`w-[102%] h-1/2 ${
                hasError ? "bg-red-200" : "bg-green-50"
              }`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default InputText;

import React, { useEffect, useRef, useState } from "react";

const InputText = ({
  title,
  value,
  setChange,
  labelText,
  status
}) => {
  const inputRef = useRef(value);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (status === 1 && !inputRef.current.value) {
      setHasError(true)
    }
  }, [status])


  function styleLabelText() {
    if (inputRef.current.value) {
      return "top-0 right-4";
    } else {
      return "right-2 top-[18px]";
    }
  }

  return (
    <div className="relative">
      <textarea
        ref={inputRef}
        className={`peer w-full text-sm h-20 px-5 py-3 rounded-xl outline-none border focus:bottom-2 ${
          hasError
          ? "bg-red-200 placeholder:text-red-600 border-red-600"
          : "bg-white"
        } ${inputRef.current.value && "border-light-green-100"}`}
        name={title}
        id={title}
        value={value}
        placeholder={labelText}
        onFocus={() => setHasError(false)}
        onChange={setChange}
      ></textarea>
      {hasError && (
        <p className="font-kufi mr-5 text-sm text-red-600">
          * يجب ملء هذا الحقل
        </p>
      )}
      <label
        htmlFor={title}
        className={`hidden absolute transform -translate-y-[10px] pointer-events-none transition-all duration-300 peer-focus:-top-[1px] peer-focus:right-4 ${
          hasError ? "text-red-700 top-[22px]" : "text-light-green-100"
        } ${styleLabelText()} ${
          !inputRef.current.value ? "right-2 top-[18px]" : "top-0 right-4"
        }`}
      >
        <div className="w-full relative">
          <p className="font-kufi mr-1">{labelText}</p>
          <div className="absolute h-5 w-[102%] top-0 -z-10">
            <div className={`w-full h-1/2`}></div>
            <div
              className={`w-[102%] h-1/2 ${
                hasError ? "bg-red-200" : "bg-green-100"
              }`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default InputText;

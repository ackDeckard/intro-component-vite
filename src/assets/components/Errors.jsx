import React from "react";

function Errors(props) {
  return (
    <div className="relative xl:min-w-full grid justify-end ">
      <div className="pb-3 -mt-2 italic text-xs text-customRed">
        {props.email ? (
          <div>Looks like this is not an email</div>
        ) : (
          <p>{props.word} cannot be empty</p>
        )}
      </div>
      <div className="absolute -top-12 right-6 ">
        <img src="/icon-error.svg" alt="" className="" />
      </div>
    </div>
  );
}

export default Errors;

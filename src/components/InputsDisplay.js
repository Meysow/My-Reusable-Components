import React from "react";
import Inputs from "./Inputs";

const InputsDisplay = () => {
  return (
    <div className="allContainer">
      <h1>Inputs</h1>
      <div className="rowInputs ofThree">
        <div className="input">
          <span className="mainSpan">&lt;Input /&gt;</span>
          <Inputs name={1} label={"label"} placeholder={"Placeholder"} />
        </div>
        <div className="input">
          <span className="hovSpan">&amp;:hover</span>
          <Inputs
            name={2}
            label={"label"}
            placeholder={"Placeholder"}
            variant={"inputHover"}
          />
        </div>
        <div className="input">
          <span className="hovSpan">&amp;:focus</span>
          <Inputs
            name={3}
            label={"label"}
            placeholder={"Placeholder"}
            variant={"inputFoc"}
          />
        </div>
      </div>

      <div className="rowInputs ofThree">
        <div className="input">
          <span className="mainSpan">&lt;Input error /&gt;</span>
          <Inputs
            name={4}
            label={"label"}
            placeholder={"Placeholder"}
            error={"error"}
          />
        </div>
        <div className="input">
          <span className="hovSpan">&amp;:hover</span>
          <Inputs
            name={5}
            label={"label"}
            placeholder={"Placeholder"}
            variant={"inputHover"}
            error={"error"}
          />
        </div>
        <div className="input">
          <span className="hovSpan">&amp;:focus</span>
          <Inputs
            name={6}
            label={"label"}
            placeholder={"Placeholder"}
            variant={"inputFoc"}
            error={"error"}
          />
        </div>
      </div>

      <div className="rowInputs ofOne">
        <div className="input">
          <span className="mainSpan">&lt;Input disabled /&gt;</span>
          <Inputs
            name={7}
            label={"label"}
            placeholder={"Placeholder"}
            disabled={"disabled"}
          />
        </div>
      </div>

      <div className="rowInputs ofTwo">
        <div className="input">
          <span className="mainSpan">
            &lt;Input helperText=”Some interesting text” /&gt;
          </span>
          <Inputs
            name={8}
            label={"label"}
            placeholder={"Placeholder"}
            helperText={"Some interesting text"}
          />
        </div>
        <div className="input">
          <span className="mainSpan">
            &lt;Input helperText=”Some interesting text” error /&gt;
          </span>
          <Inputs
            name={9}
            label={"label"}
            placeholder={"Placeholder"}
            error={"error"}
            helperText={"Some interesting text"}
          />
        </div>
      </div>

      <div className="rowInputs ofTwo">
        <div className="input">
          <span className="mainSpan">&lt;Input startIcon /&gt;</span>
          <Inputs
            name={10}
            label={"label"}
            placeholder={"Placeholder"}
            icon={["startIcon", "phone"]}
          />
        </div>
        <div className="input">
          <span className="mainSpan">&lt;Input endIcon error /&gt;</span>
          <Inputs
            name={11}
            label={"label"}
            placeholder={"Placeholder"}
            icon={["endIcon", "lock"]}
            error={"error"}
          />
        </div>
      </div>

      <div className="rowInputs ofOne">
        <div className="input">
          <span className="mainSpan">&lt;Input value=”text” /&gt;</span>
          <Inputs name={12} label={"label"} value={"Text"} />
        </div>
      </div>

      <div className="rowInputs ofTwo">
        <div className="input">
          <span className="mainSpan">&lt;Input size=”sm” /&gt;</span>
          <Inputs
            name={13}
            label={"label"}
            placeholder={"Placeholder"}
            size={"sm"}
          />
        </div>
        <div className="input">
          <span className="mainSpan">&lt;Input size=”md” /&gt;</span>
          <Inputs
            name={14}
            label={"label"}
            placeholder={"Placeholder"}
            size={"md"}
          />
        </div>
      </div>

      <div className="rowInputs ofOne">
        <div className="input">
          <span className="mainSpan">&lt;Input fullWidth /&gt;</span>
          <Inputs
            name={15}
            label={"label"}
            placeholder={"Placeholder"}
            fullWidth={true}
          />
        </div>
      </div>

      <div className="rowInputs ofOne">
        <div className="input">
          <span className="mainSpan">&lt;Input multiline row=”4” /&gt;</span>
          <Inputs
            name={6}
            label={"label"}
            placeholder={"Placeholder"}
            multiline={4}
          />
        </div>
      </div>
    </div>
  );
};

export default InputsDisplay;

import React from "react";
import Button from "./Button";

const ButtonsDiplay = () => {
  // let disableShadow = {
  //   boxShadow: "none",
  // };

  return (
    <div className="allContainer">
      <h1>Buttons</h1>
      <div className="rowButtons ofTwo">
        <div className="button">
          <span className="mainSpan">&lt;Button /&gt;</span>
          <Button color={"grey"}>Default</Button>
        </div>
        <div className="button">
          <span className="hovSpan">&amp;:hover, &amp;:focus</span>
          <Button color={"grey"} variant={"hover"}>
            Default
          </Button>
        </div>
      </div>

      <div className="rowButtons ofTwo">
        <div className="button">
          <span className="mainSpan">&lt;Button variant=”outline” /&gt;</span>
          <Button variant={"outline"}>Default</Button>
        </div>
        <div className="button">
          <span className="hovSpan">&amp;:hover, &amp;:focus</span>
          <Button variant={"outline hover"}>Default</Button>
        </div>
      </div>

      <div className="rowButtons ofTwo">
        <div className="button">
          <span className="mainSpan">&lt;Button variant=”text” /&gt;</span>
          <Button variant={"text"}>Default</Button>
        </div>
        <div className="button">
          <span className="hovSpan">&amp;:hover, &amp;:focus</span>
          <Button variant={"text hover"}>Default</Button>
        </div>
      </div>

      <div className="rowButtons ofOne">
        <div className="button">
          <span className="mainSpan">&lt;Button disableShadow /&gt;</span>
          <Button color={"blue"} disableShadow={true}>
            Default
          </Button>
        </div>
      </div>

      <div className="rowButtons ofTwo">
        <div className="button">
          <span className="mainSpan">&lt;Button disabled /&gt;</span>
          <Button color={"grey"} disabled="disabled">
            Default
          </Button>
        </div>
        <div className="button">
          <span className="mainSpan">
            &lt;Button variant=”text” disabled /&gt;
          </span>
          <Button variant={"text"} disabled="disabled">
            Default
          </Button>
        </div>
      </div>

      <div className="rowButtons ofTwoIcon">
        <div className="button">
          <span className="mainSpan">
            &lt;Button startIcon=”local_grocery_store” /&gt;
          </span>
          <Button color={"blue"} icon={["startIcon", "local_grocery_store"]}>
            Default
          </Button>
        </div>
        <div className="button">
          <span className="mainSpan">
            &lt;Button endIcon=”local_grocery_store” /&gt;
          </span>
          <Button color={"blue"} icon={["endIcon", "local_grocery_store"]}>
            Default
          </Button>
        </div>
      </div>

      <div className="rowButtons ofThree">
        <div className="button">
          <span className="mainSpan spanSm">&lt;Button size=”sm” /&gt;</span>
          <Button color={"blue"} size={"sm"}>
            Default
          </Button>
        </div>
        <div className="button">
          <span className="mainSpan spanMd">&lt;Button size=”md” /&gt;</span>
          <Button color={"blue"} size={"md"}>
            Default
          </Button>
        </div>
        <div className="button">
          <span className="mainSpan">&lt;Button size=”lg” /&gt;</span>
          <Button color={"blue"} size={"lg"}>
            Default
          </Button>
        </div>
      </div>

      <div className="rowButtons ofFour">
        <div className="column">
          <div className="button">
            <span className="mainSpan">&lt;Button color=”default” /&gt;</span>
            <Button color={"grey"}>Default</Button>
          </div>
          <div className="button demiBot">
            <span className="hovSpan">&amp;:hover, &amp;:focus</span>
            <Button color={"grey"} variant={"hover"}>
              Default
            </Button>
          </div>
        </div>

        <div className="column">
          <div className="button">
            <span className="mainSpan">&lt;Button color=”primary” /&gt;</span>
            <Button color={"blue"}>Default</Button>
          </div>
          <div className="button bot">
            <Button color={"blue"} variant={"hover"}>
              Default
            </Button>
          </div>
        </div>

        <div className="column">
          <div className="button">
            <span className="mainSpan">&lt;Button color="secondary" /&gt;</span>
            <Button color={"secondary"}>Secondary</Button>
          </div>
          <div className="button bot">
            <Button color={"secondary"} variant={"hover"}>
              Secondary
            </Button>
          </div>
        </div>

        <div className="column">
          <div className="button">
            <span className="mainSpan">&lt;Button color="danger" /&gt;</span>
            <Button color={"danger"}>Danger</Button>
          </div>
          <div className="button bot">
            <Button color={"danger"} variant={"hover"}>
              Danger
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsDiplay;

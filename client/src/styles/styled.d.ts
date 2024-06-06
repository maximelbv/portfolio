// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: "#545662";
      link: "#0273DD";
    };
    fonts: {
      Jakarta: "Jakarta";
    };
    spacing: {
      M: "10px";
    };
    fontSize: {
      XL: "32px";
      XXL: "48px";
      XXXL: "64px";
    };
  }
}

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: "#545662";
    };
    fonts: {
      Jakarta: "Jakarta";
    };
    paddings: {};
    margins: {};
  }
}

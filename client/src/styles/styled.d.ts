// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: "#545662";
      subtext: "#7A7F93";
      element_bg: "#F4F5FB";
      element_stroke: "#E7E7E7";
      link: "#0273DD";
    };
    fonts: {
      Jakarta: "Jakarta";
      Quincy: "Quincy";
    };
    spacing: {
      S_XXXS: "2px";
      S_XXS: "4px";
      S_XS: "5px";
      S_S: "6px";
      S_M: "8px";
      S_L: "10px";
      S_XL: "12px";
      S_XXL: "14px";
      S_XXXL: "16px";
      M_XXXS: "18px";
      M_XXS: "20px";
      M_XS: "24px";
      M_S: "28px";
      M_M: "32px";
      M_L: "36px";
      M_XL: "40px";
    };
    fontSize: {
      S_XXXS: "2px";
      S_XXS: "4px";
      S_XS: "5px";
      S_S: "6px";
      S_M: "8px";
      S_L: "10px";
      S_XL: "12px";
      S_XXL: "14px";
      S_XXXL: "16px";
      M_XXXS: "18px";
      M_XXS: "20px";
      M_XS: "24px";
      M_S: "28px";
      M_M: "32px";
      M_L: "36px";
      M_XL: "40px";
    };
  }
}

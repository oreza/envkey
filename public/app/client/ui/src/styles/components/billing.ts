import { style } from "typestyle";
import * as colors from "../colors";
import * as fonts from "../fonts";
import { OrgContainer } from "./org_container";

export const Billing =
  OrgContainer +
  " " +
  style({
    $nest: {
      ".current-license": {
        marginBottom: 30,
        $nest: {
          "> h3": {
            marginBottom: 10,
          },
          "> .field": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 25px",
            margin: 0,
            height: 65,
            $nest: {
              "&:not(:last-of-type)": {
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              },
              label: {
                margin: 0,
                display: "flex",
                alignItems: "center",
                $nest: {
                  ".refresh": {
                    margin: "0 4px",
                    padding: "2px 4px",
                    cursor: "pointer",
                    $nest: {
                      svg: {
                        fill: "rgba(0,0,0,0.3)",
                        width: 12,
                        height: 12,
                      },
                      "&:hover svg": {
                        fill: colors.DARK_BLUE,
                      },
                    },
                  },
                },
              },
              span: {
                color: colors.DARK_BLUE,
                textAlign: "right",
                fontSize: "14.5xpx",
                $nest: {
                  small: {
                    display: "block",
                    fontFamily: fonts.MAIN,
                    color: "rgba(0,0,0,0.4)",
                  },
                },
              },
            },
          },
        },
      },
      ".field.new-license > textarea": {
        height: 350,
      },
      ".field.billing-id span": {
        fontSize: "15px",
        userSelect: "initial",
      },
      ".field.billing-tier span strong": {
        color: colors.DARK_BLUE,
      },
    },
  });

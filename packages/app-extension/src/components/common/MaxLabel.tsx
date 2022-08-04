import { styles, useCustomTheme } from "@coral-xyz/themes";

const useStyles = styles((theme) => ({
  wrapper: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    color: theme.custom.colors.fontColor,
  },
  clickable: {
    cursor: "pointer",
    "&:hover": {
      color: theme.custom.colors.primaryButton,
    },
  },
}));

export const MaxLabel = ({
  amount,
  onSetAmount,
}: {
  amount: number | null;
  onSetAmount: (amount: number) => void;
}) => {
  const theme = useCustomTheme();
  const classes = useStyles();
  return (
    <div
      className={[
        classes.wrapper,
        amount && amount > 0 ? classes.clickable : "",
      ].join(" ")}
      onClick={() => amount && onSetAmount(amount)}
    >
      <span style={{ color: theme.custom.colors.secondary }}>Max: </span>
      {amount !== null ? amount : "-"}
    </div>
  );
};

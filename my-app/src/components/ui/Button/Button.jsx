import {Button as MuiButton} from "@mui/material";

function Button({ loading, children, className, ...props }) {
  return (
    <MuiButton
      className={`Button ${className}`}
      {...props}
      color={'primary'}
    >
      {loading
        ? 'Loading'
        : children
      }
    </MuiButton>
  );
}

export default Button;

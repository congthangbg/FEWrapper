import PropTypes from "prop-types";
import {forwardRef} from "react";

// material-ui
import {useTheme} from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Tooltip,
} from "@mui/material";

// project import
import Highlighter from "./third-party/Highlighter";
import {Box, Fab, Grid} from "../../node_modules/@mui/material/index";
import AddIcon from "@mui/icons-material/Add";
import {memo} from "react";
// header style
const headerSX = {
  p:1,
  "& .MuiCardHeader-action": {m: "0px auto", alignSelf: "center"},
};

// ==============================|| CUSTOM - MAIN CARD ||============================== //

const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentSX = {},
      darkTitle,
      divider = true,
      elevation,
      secondary,
      shadow,
      sx = {},
      title,
      codeHighlight,
      titleAdd,
      onClickAdd,
      onAdd,
      addDisabled,
      ...others
    },
    ref
  ) => {
    const theme = useTheme();
    boxShadow = theme.palette.mode === "dark" ? boxShadow || true : boxShadow;

    const handleClickAdd = (params) => {
        onClickAdd && onClickAdd(true);
    }


    return (
      <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
          ...sx,
          border: border ? "1px solid" : "none",
          borderRadius: 2,
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.divider
              : theme.palette.grey.A800,
          boxShadow:
            boxShadow && (!border || theme.palette.mode === "dark")
              ? shadow || theme.customShadows.z1
              : "inherit",
          ":hover": {
            boxShadow: boxShadow ? shadow || theme.customShadows.z1 : "inherit",
          },
          "& pre": {
            m: 0,
            p: "16px !important",
            fontFamily: theme.typography.fontFamily,
            fontSize: "0.75rem",
          },
        }}
      >
        {/* card header and action */}
        {!darkTitle && title && (
          <>
            <div style={{width: "100%"}}>
              <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                  }}
              >
                <CardHeader
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    height:15
                  }}
                  titleTypographyProps={{variant: "subtitle1"}}
                  title={title}
                  action={secondary}
                />
                {onAdd &&
                <Tooltip disabled = {addDisabled ? true:false} size="small" title={titleAdd ? titleAdd : "Add"} onClick={handleClickAdd} aria-label="add">
                  <Fab color="primary"  sx={{mr:5,mt:1}}>
                    <AddIcon />
                  </Fab>
                </Tooltip>
                }
              </Box>
            </div>
          </>
        )}
        {darkTitle && title && (
          <CardHeader
            sx={headerSX}
            title={<Typography variant="h3">{title}</Typography>}
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {content && <CardContent sx={contentSX}>{children}</CardContent>}
        {!content && children}

        {/* card footer - clipboard & highlighter  */}
        {codeHighlight && (
          <>
            <Divider sx={{borderStyle: "dashed"}} />
            <Highlighter codeHighlight={codeHighlight} main>
              {children}
            </Highlighter>
          </>
        )}
      </Card>
    );
  }
);
MainCard.defaultProps={
}
MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.node,
  shadow: PropTypes.any,
  sx: PropTypes.object,
  title: PropTypes.any,
  codeHighlight: PropTypes.bool,
  content: PropTypes.bool,
  children: PropTypes.node,
  //onClick Add
  onClickAdd : PropTypes.func,
  titleAdd:PropTypes.string,
  onAdd:PropTypes.bool,
  addDisabled:PropTypes.bool
};

export default memo(MainCard) ;

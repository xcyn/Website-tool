const {
  Button,
  Cell,
  CellGroup,
  Col,
  Row,
  Image,
  NavBar
} = isNodeEnv ? {} : require('vant');
const ButtonCss = isNodeEnv ? {} : require('vant/lib/button/style');
const CellCss = isNodeEnv ? {} : require('vant/lib/cell/style');
const CellGroupCss = isNodeEnv ? {} : require('vant/lib/cell-group/style');
const colCss = isNodeEnv ? {} : require('vant/lib/col/style');
const rowCss = isNodeEnv ? {} : require('vant/lib/row/style');
const ImageCss = isNodeEnv ? {} : require('vant/lib/image/style');
const NavBarCss = isNodeEnv ? {} : require('vant/lib/nav-bar/style');
const BaseUrl = isNodeEnv ? 'http://127.0.0.1:7013' : 'http://lovebhs.xyz:7013'

module.exports = {
  ButtonCss,
  Button,
  Cell,
  CellCss,
  CellGroup,
  CellGroupCss,
  Col,
  colCss,
  Row,
  rowCss,
  Image,
  ImageCss,
  NavBar,
  NavBarCss,
  BaseUrl
};
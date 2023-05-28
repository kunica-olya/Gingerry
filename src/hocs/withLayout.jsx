import PropTypes from 'prop-types';
import HeaderView from '../components/Header/HeaderView';
import FooterView from '../components/Footer/FooterView';

export default function withLayout(WrappedComponent) {
  function LayoutComponent({
    config,
    ...props
  }) {
    return (
      <>
        <HeaderView config={config} />
        <WrappedComponent {...props} />
        <FooterView config={config} />
      </>
    );
  }
  LayoutComponent.propTypes = {
    config: PropTypes.shape({
      address: PropTypes.string,
      phone: PropTypes.string,
      author: PropTypes.string,
      github_label: PropTypes.string,
      github_link: PropTypes.string,
      design_label: PropTypes.string,
      design_link: PropTypes.string,
    })
  };

  LayoutComponent.defaultProps = {
    config: {}
  };
  return LayoutComponent;
}
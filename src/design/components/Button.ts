const defaultProps = {
    variant: 'primary',
    size: 'md',
  }
  
  export const Button = {
    defaultProps,
    baseStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      lineHeight: 'tight',
      fontWeight: 'normal',
      fontFamily: 'body',
      borderRadius: 2,
      px: 4,
    },
    variants: {
      outline: {
        width: '100%',
        bgColor: 'transparent',
        border: '1px',
        borderColor: 'primary.50',
        color: 'buttonText',
        _hover: {
          bgColor: 'transparent',
          color: 'buttonText',
        },
        _focus: {
          outline: 'none',
          boxShadow: 'none',
        },
        _disabled: {
          border: 'disabled',
          color: 'disabled',
          bg: 'transparent',
        },
      },
      blank: {
        display: 'inline-block',
        border: 'none',
        lineHeight: 'inherit',
        minWidth: 'auto',
        minHeight: 'auto',
        width: 'auto',
        height: 'auto',
        fontWeight: 'inherit',
        fontFamily: 'inherit',
        p: 0,
        background: 'none',
        _focus: {
          outline: 'none',
          boxShadow: 'none',
        }
      },
      rounded: {
        display: 'inline-block',
        border: '1px',
        borderColor: 'gray.500',
        borderRadius: 'round',
        minWidth: 'auto',
        minHeight: 'auto',
        width: 'auto',
        height: 'auto',
        fontWeight: 'inherit',
        fontFamily: 'inherit',
        p: 0,
        background: 'none',
        _focus: {
          outline: 'none',
          boxShadow: 'none',
        }
      },
    },
  }
  
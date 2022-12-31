import {createRestyleComponent, createVariant} from '@shopify/restyle';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {Theme, RestyleProps, allRestyleFunctions} from '../../theme';

type TextProps = RestyleProps<'textVariants'> & RNTextProps;
const RestyleText = createRestyleComponent<TextProps, Theme>(
  [...allRestyleFunctions, createVariant({themeKey: 'textVariants'})],
  RNText,
);

export function Text({children, variant, ...rest}: TextProps) {
  return (
    <RestyleText variant={variant ?? 'fs:40'} {...rest}>
      {children}
    </RestyleText>
  );
}

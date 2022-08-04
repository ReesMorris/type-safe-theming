import { FlattenInterface } from '../../../utils/flatten-interface';
import { StaticTokens, StaticTokensInternal, ThemeTokens } from 'theming';

export type StaticToken =
  | FlattenInterface<Omit<StaticTokensInternal, 'theme'>>
  | FlattenInterface<Omit<StaticTokens, 'theme'>>;

export type ThemeToken = FlattenInterface<Omit<ThemeTokens, 'theme'>>;

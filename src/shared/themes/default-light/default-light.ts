import { AppThemeConfiguration } from '/@/shared/themes/app-theme-types';

export const defaultLight: AppThemeConfiguration = {
    app: {
        'overlay-header':
            'linear-gradient(rgb(239 244 248 / 50%) 0%, rgb(239 244 248 / 80%)), var(--theme-background-noise)',
        'overlay-subheader':
            'linear-gradient(180deg, rgba(239, 244, 248, 5%) 0%, var(--theme-colors-background)), var(--theme-background-noise)',
        'scrollbar-handle-background': 'rgba(194, 212, 218, 30%)',
        'scrollbar-handle-hover-background': 'rgba(194, 212, 218, 60%)',
        'scrollbar-track-background': 'transparent',
    },
    colors: {
        background: 'rgb(239, 244, 248)',
        'background-alternate': 'rgb(228, 237, 242)',
        black: 'rgb(0, 0, 0)',
        foreground: 'rgb(9, 18, 20)',
        'foreground-muted': 'rgb(52, 84, 94)',
        primary: 'rgb(3, 168, 131)',
        'state-error': 'rgb(255, 59, 48)',
        'state-info': 'rgb(0, 122, 255)',
        'state-success': 'rgb(3, 168, 131)',
        'state-warning': 'rgb(212, 168, 75)',
        surface: 'rgb(255, 255, 255)',
        'surface-foreground': 'rgb(14, 30, 36)',
        white: 'rgb(255, 255, 255)',
    },
    mantineOverride: {
        primaryShade: {
            light: 4,
        },
    },
    mode: 'light',
};

import { AppThemeConfiguration } from './app-theme-types';

export const defaultTheme: AppThemeConfiguration = {
    app: {
        'content-max-width': '1800px',
        'overlay-header':
            'linear-gradient(transparent 0%, rgb(7 9 10 / 85%) 100%), var(--theme-background-noise)',
        'overlay-subheader':
            'linear-gradient(180deg, rgb(7 9 10 / 5%) 0%, var(--theme-colors-background) 100%), var(--theme-background-noise)',
        'root-font-size': '16px',
        'scrollbar-handle-active-background': 'rgba(150, 180, 179, 40%)',
        'scrollbar-handle-background': 'rgba(150, 180, 179, 20%)',
        'scrollbar-handle-border-radius': '0',
        'scrollbar-handle-hover-background': 'rgba(150, 180, 179, 60%)',
        'scrollbar-size': '9px',
        'scrollbar-track-active-background': 'transparent',
        'scrollbar-track-background': 'transparent',
        'scrollbar-track-border-radius': '0',
        'scrollbar-track-hover-background': 'transparent',
    },
    colors: {
        background: 'rgb(7, 9, 10)',
        'background-alternate': 'rgb(13, 21, 22)',
        black: 'rgb(0, 0, 0)',
        foreground: 'rgb(230, 237, 236)',
        'foreground-muted': 'rgb(110, 142, 141)',
        primary: 'rgb(3, 168, 131)',
        'state-error': 'rgb(204, 50, 50)',
        'state-info': 'rgb(53, 116, 252)',
        'state-success': 'rgb(3, 168, 131)',
        'state-warning': 'rgb(212, 168, 75)',
        surface: 'rgb(19, 31, 32)',
        'surface-foreground': 'rgb(196, 214, 213)',
        white: 'rgb(255, 255, 255)',
    },
    mode: 'dark',
};

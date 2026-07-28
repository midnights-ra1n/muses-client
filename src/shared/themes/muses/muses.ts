import { AppThemeConfiguration } from '/@/shared/themes/app-theme-types';

export const muses: AppThemeConfiguration = {
    app: {
        'overlay-header':
            'linear-gradient(transparent 0%, rgb(31 36 48 / 85%) 100%), var(--theme-background-noise)',
        'overlay-subheader':
            'linear-gradient(180deg, rgb(31 36 48 / 5%) 0%, var(--theme-colors-background) 100%), var(--theme-background-noise)',
        'scrollbar-handle-background': 'rgba(160, 160, 160, 20%)',
        'scrollbar-handle-hover-background': 'rgba(160, 160, 160, 40%)',
    },
    colors: {
        background: '#07090a',
        'background-alternate': '#0a0f0e',
        black: '#000000',
        foreground: '#f4fffc',
        'foreground-muted': '#b5c2be',
        primary: '#0ba782',
        'state-error': '#f01919',
        'state-info': '#73c0cb',
        'state-success': '#19f0be',
        'state-warning': '#f0c919',
        surface: '#0a0f0e',
        'surface-foreground': '#b5c2be',
        white: '#ffffff',
    },
    mode: 'dark',
};

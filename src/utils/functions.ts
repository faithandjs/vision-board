import { showNotification } from '@mantine/notifications';

export const notif = (title: string, type: 'success' | 'error' | 'note') => {
  showNotification({
    title,
    message: '',
    styles: (theme) => ({
      root: {
        backgroundColor:
          type === 'success' ? theme.colors.green[6] : theme.colors.red[6],
        borderColor:
          type === 'success' ? theme.colors.green[6] : theme.colors.red[6],

        '&::before': {
          backgroundColor: theme.white,
        },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': {
          backgroundColor:
            type === 'success' ? theme.colors.green[7] : theme.colors.red[7],
        },
      },
    }),
    // autoClose: false,
  });
};


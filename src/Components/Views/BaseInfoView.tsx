import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  testId: string;
  description: string;
};

export const BaseInfoView: FC<Props> = ({ title, testId, description }) => {
  return (
    <Box>
      <Typography variant="h6" data-test-id={`${testId}-base-info-view-title`}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }} data-test-id={`${testId}-base-info-view-description-text`}>
        {description}
      </Typography>
    </Box>
  );
};

import { useMemo, type VFC } from 'react';
import 'chartjs-adapter-date-fns';
import { useTheme } from '@mui/material';
import { ExecutiveSummarySchema } from 'openapi';
import {
    fillGradientPrimary,
    LineChart,
    NotEnoughData,
} from '../LineChart/LineChart';

interface IUsersChartProps {
    userTrends: ExecutiveSummarySchema['userTrends'];
    isLoading?: boolean;
}

export const UsersChart: VFC<IUsersChartProps> = ({
    userTrends,
    isLoading,
}) => {
    const theme = useTheme();
    const notEnoughData = userTrends.length < 2;
    const placeholderData = useMemo(
        () => ({
            labels: Array.from({ length: 15 }, (_, i) => i + 1).map(
                (i) =>
                    new Date(Date.now() - (15 - i) * 7 * 24 * 60 * 60 * 1000),
            ),
            datasets: [
                {
                    label: 'Total users',
                    data: [
                        3, 5, 15, 17, 25, 40, 47, 48, 55, 65, 62, 72, 75, 73,
                        80,
                    ],
                    borderColor: theme.palette.primary.light,
                    backgroundColor: fillGradientPrimary,
                    fill: true,
                    order: 3,
                },
            ],
        }),
        [theme],
    );
    const data = useMemo(
        () => ({
            labels: userTrends.map((item) => item.date),
            datasets: [
                {
                    label: 'Total users',
                    data: userTrends.map((item) => item.total),
                    borderColor: theme.palette.primary.light,
                    backgroundColor: fillGradientPrimary,
                    fill: true,
                    order: 3,
                },
                {
                    label: 'Active users',
                    data: userTrends.map((item) => item.active),
                    borderColor: theme.palette.success.border,
                    backgroundColor: theme.palette.success.border,
                    order: 2,
                },
                {
                    label: 'Inactive users',
                    data: userTrends.map((item) => item.inactive),
                    borderColor: theme.palette.warning.border,
                    backgroundColor: theme.palette.warning.border,
                    order: 1,
                },
            ],
        }),
        [theme, userTrends],
    );

    return (
        <LineChart
            data={notEnoughData || isLoading ? placeholderData : data}
            cover={notEnoughData ? <NotEnoughData /> : isLoading}
        />
    );
};

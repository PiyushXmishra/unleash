import useSWR, { SWRConfiguration } from 'swr';
import { formatApiPath } from 'utils/formatPath';
import handleErrorResponses from '../httpErrorResponseHandler';
import { ApplicationOverviewSchema } from 'openapi';

export const useApplicationOverview = (
    application: string,
    options: SWRConfiguration = {},
) => {
    const path = formatApiPath(
        `api/admin/metrics/applications/${application}/overview`,
    );
    const { data, error } = useSWR<ApplicationOverviewSchema>(
        path,
        fetcher,
        options,
    );

    return {
        data: data || { environments: [], featureCount: 0, projects: [] },
        error,
        loading: !error && !data,
    };
};

const fetcher = async (path: string): Promise<ApplicationOverviewSchema> => {
    const res = await fetch(path).then(
        handleErrorResponses('Application overview'),
    );
    const data = await res.json();
    return data;
};

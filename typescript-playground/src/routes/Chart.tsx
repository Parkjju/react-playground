import { useOutletContext } from 'react-router';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

interface CoinInterface {
    coinId: string;
}

interface IHistorical {
    close: number;
    high: number;
    low: number;
    market_cap: number;
    open: number;
    time_close: string;
    time_open: string;
    volume: number;
}

function Chart() {
    const isDark = useRecoilValue(isDarkAtom);

    const { coinId } = useOutletContext<CoinInterface>();
    const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
        fetchCoinHistory(coinId)
    );

    return (
        <div>
            {isLoading ? (
                'Loading Chart....'
            ) : (
                <ApexChart
                    type='line'
                    series={[
                        {
                            name: 'sales',
                            data: data?.map((price) => price.close) as number[],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? 'dark' : 'light',
                        },
                        chart: {
                            height: 500,
                            width: 500,
                            background: 'transparent',
                            toolbar: {
                                show: false,
                            },
                        },
                        grid: { show: false },
                        xaxis: {
                            categories: data?.map(
                                (price) => price.time_open.split('T')[0]
                            ),
                            labels: {
                                style: {
                                    colors: 'white',
                                },
                            },
                        },
                        yaxis: {
                            labels: {
                                show: false,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}
export default Chart;

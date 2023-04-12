import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { id: 1, assingnmentName: 'Assignment : A', mark: 57 },
    { id: 2, assingnmentName: 'Assignment : B', mark: 50 },
    { id: 3, assingnmentName: 'Assignment : C', mark: 60 },
    { id: 4, assingnmentName: 'Assignment : D', mark: 60 },
    { id: 5, assingnmentName: 'Assignment : E', mark: 60 },
    { id: 6, assingnmentName: 'Assignment : F', mark: 60 },
    { id: 7, assingnmentName: 'Assignment : G', mark: 60 },
    { id: 8, assingnmentName: 'Assignment : H', mark: 60 },
];

const StatisticsPage = () => {
    return (
        <div className='mb-8 mx-4'>
            <h2 className='text-center font-bold text-2xl mt-7'>Assignment Marks Chart : </h2>
            <div className="chart-container-parent flex justify-center pr-10 mt-11 " >
                <div className="chart-container" style={{ width: '100%', height: '400px', overflowX: 'auto' }}>
                    <ResponsiveContainer>
                        <ComposedChart data={data}>
                            <XAxis dataKey="assingnmentName" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Bar dataKey="mark" barSize={21} fill="#413ea0" />
                            <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

    );
};

export default StatisticsPage;



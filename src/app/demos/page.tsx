import React, { HTMLAttributes } from 'react'

export default function Demos() {
    const tableData: Array<number> = [100, 54335, 5435, 543543, 2123, 8947];
    const tableStyle: React.CSSProperties = {
        border: '1px solid blue',
        padding: '2px 8px',
    };

    return (
        <>
            <h3 className="text-xl font-extrabold mb-2">Demos</h3>
            <p className='mb-4'>This is the demo index page.</p>

            <div className="flex flex-col justify-center content-center align-center flex-nowrap">
                <table style={{
                    ...tableStyle, ...{
                        minWidth: '300px',
                        textAlign: 'center',
                        margin: '0 auto',
                    }
                }}>
                    <thead>
                        <tr>
                            <th style={tableStyle}>ID</th>
                            <th style={tableStyle}>Value</th>
                        </tr>

                    </thead>
                    <tbody>
                        {tableData.map((v: number, i: number) => (
                            <tr key={`tr-${i}`}>
                                <td style={tableStyle}>{i + 1}</td>
                                <td style={tableStyle}>{v.valueOf()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className='text-sm font-extrabold text-center'>Sample Table</p>
            </div>


        </>
    )
}

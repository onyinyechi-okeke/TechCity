import React from 'react'

function LeftSideFixed() {
    const TableHeader = [
        {id: 1, H: 'Amount'},
        {id: 2, H: '$50,000', P:'8%'},
        {id: 3, H: '$75,000', P:'8%'},
        {id: 4, H: '$100,000', P:'10%'},
        {id: 5, H: '$250,000', P:'12%'},
        {id: 6, H: '$500,000', P:'13%'},
        {id: 7, H: '$1,000,000', P:'14%'},
    ];

    const TableContent = [
        ['1st Year', '$4,000', '$5,600', '$10,000', '$30,000', '$65,000', '$140,000' ],
        ['2nd Year', '$8,320', '$11,648', '$21,000', '$63,600', '$138,450', '$299,600'],
        ['3rd Year', '$12,985', '$18,179', '$33,100', '$101,232', '$221,448', '$481,554'],
        ['3rd Year Principal + interest', '$62,985', '$88,179', '$133,100', '$351,232', '$721,448', '$1,481,544'],
        ['4th Year', '$18,024', '$25,234', '$46,410', '$143,379', '$315,236', '$688,960'],
        ['5th Year', '$23,466', '$32,852', '$61,051', '$190,585', '$421,217', '6th Year'],
        ['5th Year Principal + interest', '$73,466', '$102,852', '$161,051', '$440,585', '$921,217', '$'],
        ['6th Year', '$29,343', '$41,081', '$77,156', '$243,455', '$540,975', '7th Year'],
        ['7th Year', '$35,691', '$49,967', '$94,871', '$302,670', '$676,302', '8th Year'],
        ['8th Year', '$42,546', '$59,565', '$114,358', '$368,990', '$829,222', '9th Year'],
        ['9th Year', '$49,950', '$69,930', '$135,794', '$443,262', '$1,002,020', '10th Year'],
        ['10th Year', '$57,946', '$81,124', '$159,374', '$526,462', '$1,197,283', '$2,707,221'],
        ['10th Year Principal + interest', '$107,946', '$151,124', '$259,374', '$776,462', '$1,697,283', '$3,707,221'],
    ];
  return (
    <main className='rightside-container'>
        <p className='rightsideF-p' cellspacing= '0'>Tech City Fractional Ownership Dollar Scheme</p>

       <section className='scroll'>
        <table className='rightsideF-table'>
            <thead style={{backgroundColor: '#eea837'}}>
                <tr>
                    {TableHeader.map(({id, H, P}) =>(
                        <th key={id}>{H} <br /> {P}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {TableContent.map((row, rowIndex) => (
                <tr key={rowIndex} >
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className='tbody-td' style={{border: rowIndex === 0 || rowIndex === 1 || rowIndex === 2 || rowIndex === 4 || rowIndex === 5
                            || rowIndex === 7 || rowIndex === 8 || rowIndex === 9 || rowIndex === 10 || rowIndex === 11 ? '1px solid #454545' : '',
                            backgroundColor:  cellIndex === 0 && rowIndex === 0 || cellIndex === 0 && rowIndex === 1 || cellIndex === 0 && rowIndex === 2 || cellIndex === 0 && rowIndex === 4
                            || cellIndex === 0 && rowIndex === 5 || cellIndex === 0 && rowIndex === 7 || cellIndex === 0 && rowIndex === 8 || cellIndex === 0 && rowIndex === 9
                            || cellIndex === 0 && rowIndex === 10 || cellIndex === 0 && rowIndex === 11 ? '#454545' : ''
                            || cellIndex === 0 && rowIndex === 3 || cellIndex === 0 && rowIndex === 6 || cellIndex === 0 && rowIndex === 12? '#eea837' : '' 
                            || cellIndex === 1 && rowIndex === 3 || cellIndex === 2 && rowIndex === 3 || cellIndex === 3 && rowIndex === 3 || cellIndex === 4 && rowIndex === 3
                            || cellIndex === 5 && rowIndex === 3 || cellIndex === 6 && rowIndex === 3 || cellIndex === 1 && rowIndex === 6 || cellIndex === 2 && rowIndex === 6
                            || cellIndex === 3 && rowIndex === 6 || cellIndex === 4 && rowIndex === 6 || cellIndex === 5 && rowIndex === 6 || cellIndex === 6 && rowIndex === 6
                            || cellIndex === 1 && rowIndex === 12 || cellIndex === 2 && rowIndex === 12 || cellIndex === 3 && rowIndex === 12 || cellIndex === 4 && rowIndex === 12
                            || cellIndex === 5 && rowIndex === 12|| cellIndex === 6 && rowIndex === 12?'#454545' : ''}}>
                            {cell}
                        </td>
                    ))}
                </tr>
               ))}
            </tbody>

        </table>
        </section>

        <section style={{fontSize: '14px'}}>
            <p style={{margin: '1rem 0'}}>1. Capital is withdraw-able only at the end of chosen investment duration (that is 3, 5 or 10 years)</p>
            <p>2. ROI is withdraw-able annually or at the end of chosen investment tenure (that is 3, 5 or 10 years)</p>
        </section>
        <section className='rightside-responsive' style={{marginTop: '1rem'}}>
        <button>Invest Now</button>
      </section>

        </main>
  )
}

export default LeftSideFixed;
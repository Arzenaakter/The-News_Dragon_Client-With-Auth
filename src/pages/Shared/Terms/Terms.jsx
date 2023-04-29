import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
         <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis nemo facere iusto voluptatum ex illo labore libero perferendis esse iste reiciendis commodi, unde tempora quidem nisi soluta est consequatur inventore incidunt. Quo, distinctio molestias ipsam minima officia aliquam eius nostrum, hic fuga laboriosam eaque corrupti beatae ullam quibusdam obcaecati
         </p>

         <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
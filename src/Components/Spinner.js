import React from 'react';

const Spinner = ({light}) => (
    <div class={`spinner-border ${light && 'text-light'}`} role="status">
        <span class="sr-only">Loading...</span>
    </div>
);

export default Spinner
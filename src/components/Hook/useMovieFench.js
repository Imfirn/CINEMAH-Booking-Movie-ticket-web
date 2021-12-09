import React, { useState, useEffect } from "react";

export const useMovieFench = () => {
    const [searchTerm, setSearchTerm] = useState('');

    console.log(searchTerm)

    return{ setSearchTerm };
};
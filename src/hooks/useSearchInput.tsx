
import React from 'react'

const useSearchInput = (): {
    searchInput: string,
    handleOnChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
} => {
    const [searchInput, setSearchInput] = React.useState<string>('');


    const handleOnChangeText = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value)
    }, [setSearchInput])

    return {
        searchInput,
        handleOnChangeText
    }
}
export default useSearchInput
import React from 'react'

const useTooltip = (): { showTooltip: boolean, onChangeVisableTooltip: (toggle: boolean) => void } => {
    const [showTooltip, setShowTooltip] = React.useState<boolean>(false);
    const onChangeVisableTooltip = (toggle: boolean) => {

        setShowTooltip(toggle)
    }
    return {
        showTooltip,
        onChangeVisableTooltip
    }
}

export default useTooltip

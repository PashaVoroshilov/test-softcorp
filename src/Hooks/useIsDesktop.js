import { useMediaQuery } from 'react-responsive'
import { BREAKPOINTS } from 'styles/vars'

const useIsDesktop = (screenSize = BREAKPOINTS.md) => {
    const isDesktop = useMediaQuery({
        query: `(min-width: ${screenSize}px)`
    })

    return isDesktop;
}

export default useIsDesktop;
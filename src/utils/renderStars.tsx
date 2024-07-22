import { Star } from '@mui/icons-material';

export const renderStars = (rating: number) => {
    let renderedStars = []
    for(let i = 0; i < rating; i++){
        renderedStars.push(<Star htmlColor="rgb(250, 207, 25)"/>)
    }
    return renderedStars
}
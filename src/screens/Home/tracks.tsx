import Tracks from '../../components/Tracks/component'
import { MostPlayedTracksProps, RecentTracksProps } from '../../components/types'
import { useHomeContext } from '../../providers/Home'

export default function HomeTracksScreen({
	navigation,
	route,
}: RecentTracksProps | MostPlayedTracksProps): React.JSX.Element {
	const {
		recentTracks,
		frequentlyPlayed,
		fetchNextRecentTracks,
		hasNextRecentTracks,
		fetchNextFrequentlyPlayed,
		hasNextFrequentlyPlayed,
	} = useHomeContext()

	if (route.name === 'MostPlayedTracks') {
		return (
			<Tracks
				navigation={navigation}
				tracks={frequentlyPlayed}
				fetchNextPage={fetchNextFrequentlyPlayed}
				hasNextPage={hasNextFrequentlyPlayed}
				queue={'On Repeat'}
			/>
		)
	}

	return (
		<Tracks
			navigation={navigation}
			tracks={recentTracks}
			fetchNextPage={fetchNextRecentTracks}
			hasNextPage={hasNextRecentTracks}
			queue={'Recently Played'}
		/>
	)
}

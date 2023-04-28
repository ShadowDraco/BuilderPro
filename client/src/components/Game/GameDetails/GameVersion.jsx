import React from 'react'
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
	Button,
	Flex,
} from '@chakra-ui/react'

export default function GameVersion(props) {
	return (
		<Container width={'70%'} overflowX='scroll'>
			<Tabs>
				<TabList>
					<Tab>Game Size:</Tab>
					<Tab>Game version:</Tab>
					<Tab>1.7</Tab>
					<Tab>1.6</Tab>
					<Tab>1.5</Tab>
					<Tab>1.4</Tab>
					<Tab>1.3</Tab>
					<Tab>1.2</Tab>
					<Tab>1.1</Tab>
					<Tab>1.0</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Flex gap={3} justifyContent='space-between'>
							<Button onClick={props.setHuge}>Huge</Button>
							<Button onClick={props.setBig}>Big</Button>
							<Button onClick={props.setMedium}>Med</Button>
							<Button onClick={props.setSmall}>Sma</Button>
						</Flex>
					</TabPanel>
					<TabPanel>View game versions as development continues!</TabPanel>
					<TabPanel>Beta 1.7: Mobile controls coming soon!!</TabPanel>
					<TabPanel>
						Beta 1.6: Live Chat update! - Unity still breaks the typing but I
						simulated it best I can
					</TabPanel>
					<TabPanel>Beta 1.5: Main menu!</TabPanel>
					<TabPanel>Beta 1.4: Resizing and QOL</TabPanel>
					<TabPanel>
						Beta 1.3: Planting update! you can now plant those luscious berry
						bushes!;)
					</TabPanel>
					<TabPanel>Beta 1.2: UI update! adds options in top right!</TabPanel>
					<TabPanel>Beta 1.1: new soundtrack, and fixes overlapping!</TabPanel>
					<TabPanel>Beta 1.0: game is on the web!</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	)
}

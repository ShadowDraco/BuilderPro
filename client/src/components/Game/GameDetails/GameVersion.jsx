import React from 'react'
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
	Box,
} from '@chakra-ui/react'

export default function GameVersion() {
	return (
		<Container width={250} overflowX='scroll'>
			<Tabs>
				<TabList>
					<Tab>Game version:</Tab>
					<Tab>1.3</Tab>
					<Tab>1.2</Tab>
					<Tab>1.1</Tab>
					<Tab>1.0</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<p>View game versions as development continues!</p>
					</TabPanel>
					<TabPanel>
						<p>beta 1.3: </p>
					</TabPanel>
					<TabPanel>
						<p>beta 1.2: </p>
					</TabPanel>
					<TabPanel>
						<p>beta 1.1: new soundtrack, and fixes overlapping!</p>
					</TabPanel>
					<TabPanel>
						<p>beta 1.0: game is on the web!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	)
}

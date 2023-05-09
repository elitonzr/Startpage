// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Eliton',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Bom dia!', // 'Good morning!',
	greetingAfternoon: 'Boa Tarde,', // 'Good afternoon,',
	greetingEvening: 'Boa Noite,', // 'Good evening,',
	greetingNight: 'Vá dormir!!', //'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'ac946758ee2b62f03b59e912a9d22630', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'pt_br', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-22.188',
	defaultLongitude: '-47.398',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '2',
			name: 'YouTube',
			icon: 'youTube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '3',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		// {
		// 	id: '6',
		// 	name: 'Odysee',
		// 	icon: 'youtube',
		// 	link: 'https://odysee.com/',
		// },
		{
			id: '6',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		// {
		// 	id: '8',
		// 	name: 'twitter',
		// 	icon: 'twitter',
		// 	link: 'https://twitter.com/',
		// },
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Proxmox',
			icon: 'hard-hat',
			link: 'https://192.168.0.250:8006',
		},
		{
			id: '2',
			name: 'Home Assistant',
			icon: 'Home',
			link: 'http://192.168.0.108:8123',
		},
		{
			id: '3',
			name: 'Node-RED',
			icon: 'workflow',
			link: 'http://192.168.0.108:1880/',
		},
		{
			id: '4',
			name: 'Pi-hole',
			icon: 'router',
			link: 'http://192.168.0.200/admin',
		},
		{
			id: '5',
			name: 'Plex',
			icon: 'clapperboard',
			link: 'http://192.168.0.204:32400',
		},
		{
			id: '6',
			name: 'Airsonic',
			icon: 'headphones',
			link: 'http://192.168.0.202:4040',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'hard-hat',
			id: '1',
			links: [
				{
					name: 'Proxmox',
					link: 'https://192.168.0.250:8006',
				},
				{
					name: 'Home Assistant',
					link: 'http://192.168.0.108:8123',
				},
				{
					name: 'Node-RED',
					link: 'http://192.168.0.108:1880/',
				},
				{
					name: 'Pi-hole',
					link: 'http://192.168.0.200/admin',
				},
				// {
				// 	name: 'Inspirational',
				// 	link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				// },
				// {
				// 	name: 'Classic',
				// 	link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				// },
				// {
				// 	name: 'Oldies',
				// 	link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				// },
				// {
				// 	name: 'Rock',
				// 	link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				// },
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				// {
				// 	name: 'Linkedin',
				// 	link: 'https://www.linkedin.com',
				// },
				// {
				// 	name: 'Dribbble',
				// 	link: 'https://www.dribbble.com',
				// },
				// {
				// 	name: 'Trello',
				// 	link: 'https://www.trello.com',
				// },
				// {
				// 	name: 'Slack',
				// 	link: 'https://www.slack.com',
				// },
				{
					name: 'Plex',
					link: 'http://192.168.0.204:32400',
				},
				{
					name: 'Airsonic',
					link: 'http://192.168.0.202:4040',
				},
				{
					name: 'Inspirational',
					link: 'https://music.youtube.com/watch?v=yPYZpwSpKmA&list=RDAMVMdQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://music.youtube.com/watch?v=azdwsXLmrHE&list=RDAMVMazdwsXLmrHE',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};

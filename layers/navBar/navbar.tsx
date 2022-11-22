import {
	alpha,
	AppBar,
	Avatar,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import React from 'react';
import { Box, styled } from '@mui/system';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const Search = styled('div')(({ theme }) => ({
		'position': 'relative',
		'borderRadius': theme.shape.borderRadius,
		'backgroundColor': alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		'marginLeft': 0,
	}));
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));
	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		'color': 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			width: '100%',
		},
	}));
	return (
		<AppBar
			position='static'
			color={'primary'}
			elevation={0}
			sx={{ borderBottom: 'solid black 0.1rem' }}
		>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
				>
					<Box sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
						<AdbIcon
							sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
							color={'secondary'}
						/>
						<Typography
							variant='h6'
							noWrap
							component='a'
							color={'secondary'}
							href='/'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'sans-serif',
								fontWeight: 700,
								letterSpacing: '.3rem',
								textDecoration: 'none',
							}}
						>
							airbnb
						</Typography>
					</Box>
					<Search sx={{ border: 'solid black 1px', borderRadius: '40px' }}>
						<SearchIconWrapper>
							<SearchIcon color={'secondary'} />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Search…'
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt='Remy Sharp'
									src=''
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

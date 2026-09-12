export interface TournamentItem {
	name: string;
	status: string;
	details: string[];
	date: string;
	place: string;
}

export const tournaments: TournamentItem[] = [
	{
		name: "Torneo Ceutí 2026",
		status: "Próximo",
		details: ["48 jugadores", "7 rondas", "Ritmo rápido"],
		date: "12 de marzo de 2026",
		place: "Salón de actos, Ceuta",
	},
	{
		name: "Torneo infantil",
		status: "Finalizado",
		details: ["20 jugadores", "7 rondas", "10 mins"],
		date: "2 de febrero de 2026",
		place: "Sala polivalente, Ceuta",
	},
	{
		name: "Copa de invierno",
		status: "Próximo",
		details: ["32 jugadores", "5 rondas", "Ritmo clásico"],
		date: "18 de enero de 2026",
		place: "Club de ajedrez, Ceuta",
	},
	{
		name: "Open de primavera",
		status: "Próximo",
		details: ["60 jugadores", "9 rondas", "Ritmo blitz"],
		date: "25 de abril de 2026",
		place: "Centro cultural, Ceuta",
	},
	{
		name: "Torneo escolar local",
		status: "Finalizado",
		details: ["24 jugadores", "6 rondas", "10 mins"],
		date: "14 de mayo de 2026",
		place: "Escuela municipal, Ceuta",
	},
	{
		name: "Trofeo de la ciudad",
		status: "Próximo",
		details: ["40 jugadores", "7 rondas", "Ritmo semirrápido"],
		date: "6 de junio de 2026",
		place: "Auditorio municipal, Ceuta",
	},
	{
		name: "Torneo juvenil regional",
		status: "Próximo",
		details: ["28 jugadores", "6 rondas", "Ritmo rápido"],
		date: "20 de julio de 2026",
		place: "Pabellón deportivo, Ceuta",
	},
	{
		name: "Liga de club",
		status: "Finalizado",
		details: ["12 equipos", "8 rondas", "Ritmo clásico"],
		date: "3 de agosto de 2026",
		place: "Sala de competiciones, Ceuta",
	},
	{
		name: "Torneo de veteranos",
		status: "Próximo",
		details: ["18 jugadores", "5 rondas", "Ritmo clásico"],
		date: "11 de septiembre de 2026",
		place: "Centro cívico, Ceuta",
	},
	{
		name: "Copa de la Federación",
		status: "Próximo",
		details: ["36 jugadores", "7 rondas", "Ritmo rápido"],
		date: "29 de octubre de 2026",
		place: "Gran salón del club, Ceuta",
	},
	{
		name: "Torneo universitario",
		status: "Finalizado",
		details: ["22 jugadores", "5 rondas", "10 mins"],
		date: "16 de noviembre de 2026",
		place: "Facultad de educación, Ceuta",
	},
	{
		name: "Festival de ajedrez familiar",
		status: "Próximo",
		details: ["50 participantes", "4 rondas", "Ritmo lento"],
		date: "8 de diciembre de 2026",
		place: "Plaza de la ciudad, Ceuta",
	},
];
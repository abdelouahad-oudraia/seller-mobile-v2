import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COLORS & CONSTANTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class AppColors {
  static const Color primary = Color(0xFF1A6BFF);
  static const Color primaryLight = Color(0xFFE6EEFF);
  static const Color accent = Color(0xFF00C896);
  static const Color danger = Color(0xFFFF4D4F);
  static const Color amber = Color(0xFFF59E0B);
  static const Color purple = Color(0xFF7C3AED);
  static const Color bgScreen = Color(0xFFF5F7FF);
  static const Color cardWhite = Color(0xFFFFFFFF);
  static const Color text1 = Color(0xFF1A1D23);
  static const Color text2 = Color(0xFF6B7280);
  static const Color borderColor = Color(0xFFE8ECF4);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CLIENT MODEL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class ClientModel {
  final String id;
  final String name;
  final String phone;
  final String email;
  final String status;
  final String agentName;
  final String lastActivity;

  ClientModel({
    required this.id,
    required this.name,
    required this.phone,
    required this.email,
    required this.status,
    required this.agentName,
    required this.lastActivity,
  });

  String get initials {
    List<String> words = name.split(' ');
    String res = "";
    if (words.isNotEmpty && words[0].isNotEmpty) res += words[0][0];
    if (words.length > 1 && words[1].isNotEmpty) res += words[1][0];
    return res.toUpperCase();
  }

  String get agentInitials {
    List<String> words = agentName.split(' ');
    String res = "";
    if (words.isNotEmpty && words[0].isNotEmpty) res += words[0][0];
    if (words.length > 1 && words[1].isNotEmpty) res += words[1][0];
    return res.toUpperCase();
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CLIENTS SCREEN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class ClientsScreen extends StatefulWidget {
  const ClientsScreen({super.key});

  @override
  State<ClientsScreen> createState() => _ClientsScreenState();
}

class _ClientsScreenState extends State<ClientsScreen> {
  final TextEditingController _searchController = TextEditingController();
  
  final List<ClientModel> _allClients = [
    ClientModel(
      name: 'Marjane Hay Riad',
      id: '#cli-2026-001',
      status: 'Actif',
      phone: '0612345678',
      email: 'contact@marjane.ma',
      agentName: 'OMAR ALAOUI',
      lastActivity: 'il y a 2h',
    ),
    ClientModel(
      name: 'Carrefour Ain Sebaa',
      id: '#cli-2026-002',
      status: 'Lead',
      phone: '0623456789',
      email: 'contact@carrefour.ma',
      agentName: 'OMAR ALAOUI',
      lastActivity: 'il y a 1j',
    ),
    ClientModel(
      name: 'Label Vie Maarif',
      id: '#cli-2026-003',
      status: 'Prospect',
      phone: '0634567890',
      email: 'contact@labelvie.ma',
      agentName: 'OMAR ALAOUI',
      lastActivity: 'il y a 3j',
    ),
    ClientModel(
      name: 'Atacadão Salé',
      id: '#cli-2026-004',
      status: 'Actif',
      phone: '0645678901',
      email: 'contact@atacadao.ma',
      agentName: 'OMAR ALAOUI',
      lastActivity: 'il y a 5j',
    ),
    ClientModel(
      name: 'BIM Hay Mohammadi',
      id: '#cli-2026-005',
      status: 'Inactif',
      phone: '0656789012',
      email: 'contact@bim.ma',
      agentName: 'OMAR ALAOUI',
      lastActivity: 'il y a 1sem',
    ),
    ClientModel(
      name: 'Marjane Casa Anfa',
      id: '#cli-2026-006',
      status: 'Lead',
      phone: '0667890123',
      email: 'contact@marjaneanfa.ma',
      agentName: 'OMAR ALAOUI',
      lastActivity: 'il y a 2j',
    ),
  ];

  List<ClientModel> _filteredClients = [];

  @override
  void initState() {
    super.initState();
    _filteredClients = _allClients;
    _searchController.addListener(_onSearchChanged);
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  void _onSearchChanged() {
    final query = _searchController.text.toLowerCase();
    setState(() {
      _filteredClients = _allClients.where((client) {
        return client.name.toLowerCase().contains(query) ||
               client.phone.toLowerCase().contains(query) ||
               client.id.toLowerCase().contains(query);
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: ThemeData(
        textTheme: GoogleFonts.interTextTheme(),
      ),
      child: Scaffold(
        backgroundColor: AppColors.bgScreen,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              children: [
                _SearchBar(controller: _searchController),
                Expanded(
                  child: _filteredClients.isEmpty
                      ? const _EmptyState()
                      : ListView.builder(
                          physics: const BouncingScrollPhysics(),
                          padding: const EdgeInsets.bottom(20),
                          itemCount: _filteredClients.length,
                          itemBuilder: (context, index) {
                            return _ClientCard(
                              client: _filteredClients[index],
                            );
                          },
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SEARCH BAR WIDGET
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class _SearchBar extends StatelessWidget {
  final TextEditingController controller;
  const _SearchBar({required this.controller});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 44,
      margin: const EdgeInsets.symmetric(vertical: 16),
      decoration: BoxDecoration(
        color: AppColors.cardWhite,
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: AppColors.borderColor),
        boxShadow: const [
          BoxShadow(
            color: Color(0x12000000),
            blurRadius: 12,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: TextField(
        controller: controller,
        style: GoogleFonts.inter(fontSize: 14, color: AppColors.text1),
        decoration: InputDecoration(
          prefixIcon: const Icon(Icons.search, size: 16, color: AppColors.text2),
          hintText: "Rechercher un client...",
          hintStyle: GoogleFonts.inter(fontSize: 14, color: AppColors.text2),
          border: InputBorder.none,
          contentPadding: const EdgeInsets.symmetric(vertical: 10),
        ),
      ),
    );
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CLIENT CARD WIDGET
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class _ClientCard extends StatefulWidget {
  final ClientModel client;
  const _ClientCard({required this.client});

  @override
  State<_ClientCard> createState() => _ClientCardState();
}

class _ClientCardState extends State<_ClientCard> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 150));
    _scaleAnimation = Tween<double>(begin: 1.0, end: 0.98).animate(
        CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => _controller.forward(),
      onTapUp: (_) => _controller.reverse(),
      onTapCancel: () => _controller.reverse(),
      onTap: () {
        // Navigation handled by parent
      },
      child: ScaleTransition(
        scale: _scaleAnimation,
        child: Container(
          margin: const EdgeInsets.only(bottom: 10),
          padding: const EdgeInsets.all(14).copyWith(right: 16),
          decoration: BoxDecoration(
            color: AppColors.cardWhite,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: AppColors.borderColor),
            boxShadow: const [
              BoxShadow(
                color: Color(0x12000000),
                blurRadius: 12,
                offset: Offset(0, 2),
              ),
            ],
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // AVATAR
              CircleAvatar(
                radius: 22,
                backgroundColor: AppColors.primaryLight,
                child: Text(
                  widget.client.initials,
                  style: GoogleFonts.inter(
                    fontSize: 13,
                    fontWeight: FontWeight.bold,
                    color: AppColors.primary,
                  ),
                ),
              ),
              const SizedBox(width: 12),
              // INFO COLUMN
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      widget.client.name,
                      style: GoogleFonts.inter(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                        color: AppColors.text1,
                      ),
                    ),
                    const SizedBox(height: 1),
                    Text(
                      widget.client.id,
                      style: GoogleFonts.inter(
                        fontSize: 12,
                        color: AppColors.text2,
                      ),
                    ),
                    const SizedBox(height: 6),
                    Row(
                      children: [
                        const Icon(Icons.phone_rounded,
                            size: 12, color: AppColors.text2),
                        const SizedBox(width: 4),
                        Text(
                          widget.client.phone,
                          style: GoogleFonts.inter(
                              fontSize: 11, color: AppColors.text2),
                        ),
                        const SizedBox(width: 12),
                        const Icon(Icons.access_time_rounded,
                            size: 12, color: AppColors.text2),
                        const SizedBox(width: 4),
                        Text(
                          widget.client.lastActivity,
                          style: GoogleFonts.inter(
                              fontSize: 11, color: AppColors.text2),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                    Row(
                      children: [
                        CircleAvatar(
                          radius: 10,
                          backgroundColor: AppColors.primaryLight,
                          child: Text(
                            widget.client.agentInitials,
                            style: GoogleFonts.inter(
                              fontSize: 8,
                              fontWeight: FontWeight.bold,
                              color: AppColors.primary,
                            ),
                          ),
                        ),
                        const SizedBox(width: 6),
                        Text(
                          widget.client.agentName,
                          style: GoogleFonts.inter(
                              fontSize: 11, color: AppColors.text2),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              // STATUS BADGE
              _buildStatusBadge(widget.client.status),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStatusBadge(String status) {
    Color bg;
    Color color;
    Color border;

    switch (status) {
      case 'Actif':
        bg = const Color(0xFFECFDF5);
        color = const Color(0xFF065F46);
        border = const Color(0xFFA7F3D0);
        break;
      case 'Lead':
        bg = const Color(0xFFFFFBEB);
        color = const Color(0xFF92400E);
        border = const Color(0xFFFCD34D);
        break;
      case 'Prospect':
        bg = const Color(0xFFEEF2FF);
        color = const Color(0xFF3730A3);
        border = const Color(0xFFC7D2FE);
        break;
      case 'Inactif':
        bg = const Color(0xFFFFF1F1);
        color = const Color(0xFF991B1B);
        border = const Color(0xFFFECACA);
        break;
      default:
        bg = Colors.grey.shade100;
        color = Colors.grey.shade800;
        border = Colors.grey.shade300;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: border),
      ),
      child: Text(
        status,
        style: GoogleFonts.inter(
          fontSize: 11,
          fontWeight: FontWeight.w600,
          color: color,
        ),
      ),
    );
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EMPTY STATE WIDGET
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
class _EmptyState extends StatelessWidget {
  const _EmptyState();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(Icons.search_off_rounded, size: 48, color: AppColors.text2),
          const SizedBox(height: 12),
          Text(
            "Aucun client trouvé",
            style: GoogleFonts.inter(fontSize: 14, color: AppColors.text2),
          ),
        ],
      ),
    );
  }
}

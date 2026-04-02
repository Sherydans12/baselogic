// src/i18n/ui.ts

export const LANGUAGES = {
  es: 'Español',
  en: 'English',
};

export const ui = {
  es: {
    // Navbar (Ya lo tienes)
    'nav.solutions': 'Soluciones',
    'nav.industries': 'Sectores',
    'nav.tech': 'Tecnología',
    'nav.method': 'Método',
    'nav.faq': 'Preguntas',
    'nav.cta': 'Agendar Demo',
    
    // Hero Section (NUEVO)
    'hero.badge': 'Enterprise · Production-Ready',
    'hero.title.prefix': 'Ingeniería de Software para',
    'hero.title.highlight': 'Operaciones Complejas',
    'hero.subtitle': 'Transformamos operaciones complejas en sistemas que funcionan. Eliminamos el caos del Excel, reducimos tiempos de inactividad y conectamos tus datos para que tomes mejores decisiones — más rápido.',
    'hero.btn.primary': 'Agendar Demo',
    'hero.btn.secondary': 'Explorar EAM',

    // Services Section (NUEVO)
    'services.title': 'No hacemos sitios web.',
    'services.title.highlight': 'Construimos Motores de Negocio.',
    'services.subtitle': 'Mientras otros se quedan en la capa visual, nosotros profundizamos en la lógica operativa, los datos y la automatización.',
    
    'services.diagram.visual': 'CAPA VISUAL (MARKETING)',
    'services.diagram.desc': 'Lo que ve el cliente final',
    'services.diagram.logic': 'CAPA LÓGICA (BASELOGIC)',
    'services.diagram.data': 'Data Real',
    'services.diagram.auth': 'Auth & Roles',
    'services.diagram.api': 'API Integrations',

    'services.card1.title': 'Apps de Gestión & Dashboards',
    'services.card1.desc': 'Desarrollamos paneles de control a medida, intranets y sistemas SaaS. Perfecto para clientes que necesitan gestionar pedidos, usuarios o inventarios complejos.',
    'services.card1.item1': 'Portales B2B / Proveedores',
    'services.card1.item2': 'Sistemas de Agenda Custom',
    'services.card1.item3': 'Gestión de Inventarios',
    'services.card1.link': 'Ver ejemplos',

    'services.card2.title': 'API & Automatización',
    'services.card2.desc': 'Eliminamos el doble ingreso manual de datos. Conectamos tus sistemas actuales (ERP, CRM, facturación) para que la información fluya automáticamente entre ellos.',
    'services.card2.item1': 'Sincronización de Stock/Precios',
    'services.card2.item2': 'Webhooks & Notificaciones',
    'services.card2.item3': 'Migración de Datos Legacy',
    'services.card2.link': 'Ver casos de uso',

    // Stack Section
    'stack.title': 'Arquitectura & Stack',
    'stack.subtitle': 'Construimos sobre un ecosistema de alta fiabilidad (TypeScript · Angular · NestJS), pero nos adaptamos e integramos con tu infraestructura actual — ya sea SAP, sistemas Legacy, .NET o cualquier stack existente.',
    'stack.backend': 'Backend Enterprise',
    'stack.frontend': 'Frontend de Alto Rendimiento',
    'stack.infra': 'Data & Infraestructura',
    'stack.integration': 'Integración & Fiabilidad',

    // Method Section (NUEVO)
    'method.title': 'The BaseLogic Pipeline', // Cambiamos "Protocol" por "Pipeline" (suena más dev)
    'method.subtitle': 'Un flujo de trabajo estandarizado inspirado en Git-Flow y DevOps para garantizar entregas sin fricción.',
    'method.phase': 'STAGE', // Usamos "STAGE" como en videojuegos o pipelines
        
    'method.step1.title': 'Architecture & RFCs',
    'method.step1.desc': 'No escribimos código a ciegas. Definimos esquemas de BD, contratos de API (Swagger) y arquitectura de servidores antes de empezar.',
        
    'method.step2.title': 'Agile Development',
    'method.step2.desc': 'Sprints de 2 semanas. Tendrás acceso a un entorno de "Staging" para ver avances en tiempo real cada viernes.',
        
    'method.step3.title': 'QA & Hardening',
    'method.step3.desc': 'Antes de salir a producción, el sistema pasa por pruebas de carga y escaneo de vulnerabilidades básicas.',
        
    'method.step4.title': 'CI/CD Deployment',
    'method.step4.desc': 'Despliegue automatizado en tu infraestructura (AWS/VPS). Te entregamos el código fuente limpio y la documentación técnica.',
    // Footer Section (NUEVO)
    'footer.title': '¿Tu agencia rechaza proyectos',
    'footer.title.highlight': 'por complejidad técnica?',
    'footer.desc': 'Hablemos. Analicemos ese requerimiento difícil sin compromiso y veamos cómo BaseLogic puede ejecutarlo bajo tu marca.',        'footer.cta.linkedin': 'Conectar en LinkedIn',
    'footer.col1': 'Servicios',
    'footer.col1.1': 'SaaS & Dashboards',        'footer.col1.2': 'Integraciones API',
    'footer.col1.3': 'Auditoría Técnica',
    'footer.col2': 'Legal',
    'footer.col2.1': 'Privacidad',
    'footer.col2.2': 'Términos de Servicio',
    'footer.copy': 'BaseLogic System © 2026 • Stgo, Chile.',
    // FAQ Section (NUEVO)
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre nuestra modalidad de trabajo.',
    'faq.q1': '¿Trabajan bajo marca blanca (White Label)?',
    'faq.a1': 'Absolutamente. Somos tu departamento de ingeniería invisible. No ponemos nuestra marca en el footer ni contactamos a tu cliente final, a menos que tú nos presentes como tu equipo técnico.',
    'faq.q2': '¿Firman acuerdos de confidencialidad (NDA)?',
    'faq.a2': 'Sí. Entendemos el valor de la propiedad intelectual. Firmamos NDA antes de recibir cualquier acceso o documentación sensible.',
    'faq.q3': '¿Qué pasa si el software falla después de la entrega?',
    'faq.a3': 'Ofrecemos 30 días de garantía técnica gratuita para corregir cualquier bug del alcance original. También ofrecemos planes de mantenimiento mensual (SLA) para soporte continuo.',
    'faq.q4': '¿Me entregan el código fuente?',
    'faq.a4': 'Sí. Una vez finalizado el pago del proyecto, el repositorio Git y toda la propiedad intelectual se transfieren legalmente a tu empresa o a tu cliente.',

    // Industries Section
    'ind.title': 'Sectores de Experiencia',
    'ind.subtitle': 'Entendemos los desafíos de tu industria porque ya los hemos resuelto antes.',
    'ind.1.title': 'Minería & Industria Pesada',
    'ind.1.desc': 'Gestión de activos críticos, control de mantenimiento preventivo/correctivo y continuidad operacional en faenas de alta exigencia.',
    'ind.1.badge': 'Flagship: BaseLogic EAM',
    'ind.2.title': 'Logística & Transporte',
    'ind.2.desc': 'Tracking en tiempo real, optimización de rutas y gestión de flotas.',
    'ind.3.title': 'Fintech & Pagos',
    'ind.3.desc': 'Integración de pasarelas, conciliación bancaria y seguridad PCI.',
    'ind.4.title': 'E-Commerce B2B',
    'ind.4.desc': 'Catálogos complejos, listas de precios dinámicas y conexión con ERPs.',
    'ind.5.title': 'Salud (HealthTech)',
    'ind.5.desc': 'Agendamiento médico, fichas clínicas y protección de datos sensibles.',

    // EAM Section
    'eam.badge': 'Producto Flagship',
    'eam.title.prefix': 'Presentamos',
    'eam.title.highlight': 'BaseLogic EAM',
    'eam.subtitle': 'Aseguramos que tus equipos críticos nunca se detengan. Control total de activos, mantenimiento planificado y trazabilidad de costos exacta por faena — todo en una sola plataforma.',
    'eam.cta.primary': 'Ver Ficha Técnica',
    'eam.cta.secondary': 'Conocer más',
    'eam.proof': 'La prueba de que sabemos construir software de grado industrial',
    'eam.stat1.value': 'Multi-faena',
    'eam.stat1.label': 'Control por Contrato',
    'eam.stat2.value': 'Multi-sitio',
    'eam.stat2.label': 'Cobertura Total',
    'eam.stat3.value': 'CPP',
    'eam.stat3.label': 'Costos Exactos',
    'eam.stat4.value': 'MTBF',
    'eam.stat4.label': 'Menos Paradas',
    'eam.pill1': 'Órdenes de Trabajo',
    'eam.pill2': 'Control de Activos',
    'eam.pill3': 'Stock Multi-bodega',
    'eam.pill4': 'Kits de Repuestos',
    'eam.pill5': 'Horómetros',
    'eam.pill6': 'Contratos & Subcontratos',
    'eam.pill7': 'Análisis MTBF',
    'eam.pill8': 'Dark / Light UI',
    'eam.vs.title': 'Diseñado para superar a',
    'eam.vs.sub': 'Mayor agilidad de implementación. Precisión financiera real.',
    'eam.module1.title': 'Cero Paradas Imprevistas',
    'eam.module1.desc': 'Órdenes de Trabajo automáticas, horómetros y planes de mantenimiento para maximizar la Disponibilidad Mecánica de tu flota y aumentar el MTBF.',
    'eam.module2.title': 'Control de Inventario en Tiempo Real',
    'eam.module2.desc': 'Evita paradas de planta por falta de repuestos críticos. Stock multi-bodega con valorización exacta por Costo Promedio Ponderado (CPP).',
    'eam.module3.title': 'Control Multifaena',
    'eam.module3.desc': 'Aísla y controla los costos exactos de cada contrato o faena minera en tiempo real. Sin mezcla de datos entre proyectos.',

    // WhatsApp Button
    'wa.message': 'Hola equipo de BaseLogic, me interesa agendar una reunión sobre sus servicios.',

    // TrustBar Section
    'trust.stat1': '99.9% SLA Uptime',
    'trust.stat2': '100% Tipado Estricto',
    'trust.stat3': 'Cero Outsourcing',
    'trust.stat4': 'Soporte Técnico Directo',

    // Manifesto Section
    'manifesto.title': 'Nuestro ADN:',
    'manifesto.title.highlight': 'Ingeniería Boutique',
    'manifesto.body': 'No somos una fábrica de software que delega tu infraestructura crítica a desarrolladores junior. Somos un escuadrón especializado operando desde Chile. Cuando trabajas con BaseLogic, tu arquitectura es diseñada y ejecutada exclusivamente por ingenieros senior obsesionados con la fiabilidad.',
    'manifesto.cta': 'Agendar una llamada directa',

    // EAM Landing — Lead Magnet
    'eam.landing.badge': 'Ficha Técnica Oficial',
    'eam.landing.title': 'BaseLogic EAM',
    'eam.landing.subtitle': 'Arquitectura técnica, módulos y capacidades del sistema de gestión de activos para operaciones industriales de alta exigencia.',
    'eam.landing.magnet.title': 'Descarga la Arquitectura Técnica y Módulos del EAM',
    'eam.landing.magnet.desc': 'Especificaciones técnicas, stack enterprise, diagramas de módulos y casos de uso industriales. Sin spam, un único envío.',
    'eam.landing.magnet.input': 'Email Corporativo',
    'eam.landing.magnet.btn': 'Descargar PDF (2.4 MB)',
    'eam.landing.magnet.legal': 'Solo usaremos tu email para enviarte el documento. Sin newsletters.',

    // Contact Page
    'contact.title': 'Cuéntanos tu desafío.',
    'contact.subtitle': 'Sin importar la complejidad, lo analizamos sin costo. Si podemos ayudarte, tendrás una propuesta concreta en menos de 24 horas.',
    'contact.form.role': '¿Qué perfil tienes?',
    'contact.form.role.agency': 'Soy Agencia / Partner',
    'contact.form.role.company': 'Soy Empresa Final',
    'contact.form.type': '¿Qué necesitas?',
    'contact.form.type.new': 'Proyecto Nuevo (Desde cero)',
    'contact.form.type.rescue': 'Rescate / Refactorización',
    'contact.form.type.audit': 'Auditoría Técnica',
    'contact.form.type.team': 'Staff Augmentation',
    'contact.form.type.eam': 'BaseLogic EAM (Sector Industrial)',
    'contact.form.details': 'Detalles del Proyecto',
    'contact.form.submit': 'Enviar Solicitud',
    'contact.info.email': 'Escríbenos directo',
    'contact.info.location': 'Base de Operaciones',
    },
    
  en: {
    // Navbar
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.tech': 'Tech Stack',
    'nav.method': 'Methodology',
    'nav.faq': 'FAQ',
    'nav.cta': 'Book Demo',

    // Hero Section (NUEVO)
    'hero.badge': 'Enterprise · Production-Ready',
    'hero.title.prefix': 'Software Engineering for',
    'hero.title.highlight': 'Complex Operations',
    'hero.subtitle': 'We turn complex operations into systems that actually work. We eliminate spreadsheet chaos, reduce downtime, and connect your data so you make better decisions — faster.',
    'hero.btn.primary': 'Book a Demo',
    'hero.btn.secondary': 'Explore EAM',

    // Services Section (NEW)
    'services.title': "We don't build websites.",
    'services.title.highlight': 'We build Business Engines.',
    'services.subtitle': 'While others stay on the visual layer, we dive deep into operational logic, data, and automation.',
    
    'services.diagram.visual': 'VISUAL LAYER (MARKETING)',
    'services.diagram.desc': 'What the end user sees',
    'services.diagram.logic': 'LOGIC LAYER (BASELOGIC)',
    'services.diagram.data': 'Real Data',
    'services.diagram.auth': 'Auth & Roles',
    'services.diagram.api': 'API Integrations',

    'services.card1.title': 'Business Apps & Dashboards',
    'services.card1.desc': 'We build custom control panels, intranets, and SaaS systems. Perfect for clients needing to manage orders, users, or complex inventories.',
    'services.card1.item1': 'B2B / Vendor Portals',
    'services.card1.item2': 'Custom Scheduling Systems',
    'services.card1.item3': 'Inventory Management',
    'services.card1.link': 'View examples',

    'services.card2.title': 'API & Automation',
    'services.card2.desc': 'We eliminate manual double-entry. We connect your existing systems (ERP, CRM, billing) so data flows automatically between them — no human intervention needed.',
    'services.card2.item1': 'Stock/Price Sync',
    'services.card2.item2': 'Webhooks & Notifications',
    'services.card2.item3': 'Legacy Data Migration',
    'services.card2.link': 'View use cases',

    // Stack Section
    'stack.title': 'Architecture & Stack',
    'stack.subtitle': 'We build on a high-reliability ecosystem (TypeScript · Angular · NestJS), but we seamlessly adapt and integrate with your existing infrastructure — whether it\'s SAP, Legacy systems, .NET, or any current stack.',
    'stack.backend': 'Enterprise Backend',
    'stack.frontend': 'High-Performance Frontend',
    'stack.infra': 'Data & Infrastructure',
    'stack.integration': 'Integration & Reliability',

        // Method Section
    'method.title': 'The BaseLogic Pipeline',
    'method.subtitle': 'A standardized workflow inspired by Git-Flow and DevOps to ensure frictionless delivery.',
    'method.phase': 'STAGE',
        
    'method.step1.title': 'Architecture & RFCs',
    'method.step1.desc': 'We don\'t code blindly. We define DB schemas, API contracts (Swagger), and server architecture before starting.',
        
    'method.step2.title': 'Agile Development',
    'method.step2.desc': '2-week sprints. You get access to a "Staging" environment to see real-time progress every Friday.',
        
    'method.step3.title': 'QA & Hardening',
    'method.step3.desc': 'Before going live, the system undergoes load testing and basic vulnerability scanning.',
        
    'method.step4.title': 'CI/CD Deployment',
    'method.step4.desc': 'Automated deployment to your infrastructure (AWS/VPS). We hand over clean source code and technical documentation.',

    // Footer Section
    'footer.title': 'Does your agency reject projects',
    'footer.title.highlight': 'due to technical complexity?',
    'footer.desc': 'Let\'s talk. Let\'s analyze that difficult requirement without commitment and see how BaseLogic can execute it under your brand.',
    'footer.cta.linkedin': 'Connect on LinkedIn',
    'footer.col1': 'Services',
    'footer.col1.1': 'SaaS & Dashboards',
    'footer.col1.2': 'API Integrations',
    'footer.col1.3': 'Tech Audit',
    'footer.col2': 'Legal',
    'footer.col2.1': 'Privacy',
    'footer.col2.2': 'Terms of Service',
    'footer.copy': 'BaseLogic System © 2026 • Stgo, Chile.',
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about our workflow.',
    'faq.q1': 'Do you work White Label?',
    'faq.a1': 'Absolutely. We are your invisible engineering department. We never brand the work nor contact your end client, unless you introduce us as your technical team.',
    'faq.q2': 'Do you sign Non-Disclosure Agreements (NDAs)?',
    'faq.a2': 'Yes. We understand the value of IP. We sign NDAs before receiving any access or sensitive documentation.',
    'faq.q3': 'What happens if the software fails after delivery?',
    'faq.a3': 'We offer a 30-day free technical warranty to fix any bugs within the original scope. We also offer monthly maintenance plans (SLA) for ongoing support.',
    'faq.q4': 'Do I own the source code?',
    'faq.a4': 'Yes. Once the project payment is settled, the Git repository and all intellectual property are legally transferred to your company or your client.',

    // Industries Section
    'ind.title': 'Industries',
    'ind.subtitle': 'We understand your industry\'s challenges because we\'ve already solved them.',
    'ind.1.title': 'Mining & Heavy Industry',
    'ind.1.desc': 'Critical asset management, preventive/corrective maintenance control, and operational continuity in high-demand facilities.',
    'ind.1.badge': 'Flagship: BaseLogic EAM',
    'ind.2.title': 'Logistics & Transport',
    'ind.2.desc': 'Real-time tracking, route optimization, and fleet management.',
    'ind.3.title': 'Fintech & Payments',
    'ind.3.desc': 'Gateway integration, bank reconciliation, and PCI security.',
    'ind.4.title': 'B2B E-Commerce',
    'ind.4.desc': 'Complex catalogs, dynamic price lists, and ERP connections.',
    'ind.5.title': 'HealthTech',
    'ind.5.desc': 'Medical scheduling, electronic health records, and sensitive data protection.',

    // EAM Section
    'eam.badge': 'Flagship Product',
    'eam.title.prefix': 'Introducing',
    'eam.title.highlight': 'BaseLogic EAM',
    'eam.subtitle': 'We ensure your critical equipment never stops. Full asset control, planned maintenance, and exact cost traceability per facility — all in one platform.',
    'eam.cta.primary': 'View Tech Sheet',
    'eam.cta.secondary': 'Learn More',
    'eam.proof': 'Proof that we build industrial-grade software',
    'eam.stat1.value': 'Multi-site',
    'eam.stat1.label': 'Per-Contract Control',
    'eam.stat2.value': 'Multi-facility',
    'eam.stat2.label': 'Full Coverage',
    'eam.stat3.value': 'WAC',
    'eam.stat3.label': 'Exact Costs',
    'eam.stat4.value': 'MTBF',
    'eam.stat4.label': 'Fewer Stoppages',
    'eam.pill1': 'Work Orders',
    'eam.pill2': 'Asset Control',
    'eam.pill3': 'Multi-warehouse Stock',
    'eam.pill4': 'Spare Parts Kits',
    'eam.pill5': 'Hour Meters',
    'eam.pill6': 'Contracts & Subcontracts',
    'eam.pill7': 'MTBF Analytics',
    'eam.pill8': 'Dark / Light UI',
    'eam.vs.title': 'Designed to outperform',
    'eam.vs.sub': 'Faster implementation. Real financial precision.',
    'eam.module1.title': 'Zero Unplanned Downtime',
    'eam.module1.desc': 'Automatic Work Orders, hour meters, and maintenance plans to maximize your fleet\'s Mechanical Availability and extend MTBF.',
    'eam.module2.title': 'Real-Time Inventory Control',
    'eam.module2.desc': 'Prevent plant stoppages from missing critical parts. Multi-warehouse stock with exact Weighted Average Cost (WAC) valuation.',
    'eam.module3.title': 'Multi-facility Control',
    'eam.module3.desc': 'Isolate and track exact costs per contract or mining site in real time. No data mixing between projects.',

    // WhatsApp Button
    'wa.message': 'Hello BaseLogic team, I am interested in scheduling a meeting about your services.',

    // TrustBar Section
    'trust.stat1': '99.9% SLA Uptime',
    'trust.stat2': '100% Strict Typing',
    'trust.stat3': 'Zero Outsourcing',
    'trust.stat4': 'Direct Tech Support',

    // Manifesto Section
    'manifesto.title': 'Our DNA:',
    'manifesto.title.highlight': 'Boutique Engineering',
    'manifesto.body': 'We are not a software factory that hands off your critical infrastructure to junior developers. We are a specialized squad operating from Chile. When you work with BaseLogic, your architecture is designed and executed exclusively by senior engineers obsessed with reliability.',
    'manifesto.cta': 'Book a direct call',

    // EAM Landing — Lead Magnet
    'eam.landing.badge': 'Official Tech Sheet',
    'eam.landing.title': 'BaseLogic EAM',
    'eam.landing.subtitle': 'Technical architecture, modules, and capabilities of the asset management system for high-demand industrial operations.',
    'eam.landing.magnet.title': 'Download the Technical Architecture and EAM Modules',
    'eam.landing.magnet.desc': 'Technical specifications, enterprise stack, module diagrams, and industrial use cases. No spam, one-time delivery.',
    'eam.landing.magnet.input': 'Corporate Email',
    'eam.landing.magnet.btn': 'Download PDF (2.4 MB)',
    'eam.landing.magnet.legal': 'We will only use your email to send the document. No newsletters.',

    // Contact Page
    'contact.title': 'Tell us your challenge.',
    'contact.subtitle': 'No matter the complexity, we analyze it at no cost. If we can help, you\'ll have a concrete proposal in under 24 hours.',
    'contact.form.role': 'What is your profile?',
    'contact.form.role.agency': 'Agency / Partner',
    'contact.form.role.company': 'End Company',
    'contact.form.type': 'What do you need?',
    'contact.form.type.new': 'New Project (From scratch)',
    'contact.form.type.rescue': 'Rescue / Refactoring',
    'contact.form.type.audit': 'Technical Audit',
    'contact.form.type.team': 'Staff Augmentation',
    'contact.form.type.eam': 'BaseLogic EAM (Industrial Sector)',
    'contact.form.details': 'Project Details',
    'contact.form.submit': 'Send Request',
    'contact.info.email': 'Email us directly',
    'contact.info.location': 'Operations Base',
    }
} as const;
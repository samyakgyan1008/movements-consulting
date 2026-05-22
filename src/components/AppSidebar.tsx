import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Compass, Users, BookOpen, Sparkles, Mail, Scale } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: Users },
  { title: "Services", url: "/services", icon: Compass },
  { title: "Legal", url: "/legal", icon: Scale },
  { title: "Philosophy", url: "/philosophy", icon: Sparkles },
  { title: "Insights", url: "/insights", icon: BookOpen },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const currentPath = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center px-2 py-3 overflow-hidden">
          <img src={logo} alt="Movements Consulting" className="h-10 w-auto max-w-full object-contain object-left" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigate</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={currentPath === item.url}>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        {!collapsed && (
          <div className="px-2 py-3 text-xs text-sidebar-foreground/70">
            <p className="mb-1 font-medium text-sidebar-foreground">Deepak Lal</p>
            <p>Hyderabad, India</p>
            <a href="mailto:deepak@movementsindia.com" className="text-sidebar-primary hover:underline">
              deepak@movementsindia.com
            </a>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
"use client"

import { useState } from "react"
import { Github, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import this_is_fine from '../../public/images/this_is_fine.png'
import Image from "next/image"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <main className="container mx-auto px-4 py-8 text-gray-300">
        <section id="home" className="mb-16 bg-[#232323] py-20 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-5xl font-bold mb-4 text-white">Juan Leon</h2>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="h-5 w-5 text-[#00FF00]" />
                  <span className="text-gray-300">Virginia, USA</span>
                </div>
                <p className="text-2xl mb-6 text-[#00FF00]">
                  DevOps | Cloud Security | Data Engineer | SIEM Engineer | CI/CD Automation
                </p>
                <p className="text-xl mb-8">
                  Extensive background in DevOps, Cloud Security, Configuration Automation, Data Engineering, and
                  expanding my knowledge around machine learning and AI.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/jleon757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors duration-300"
                  >
                    <Github className="h-8 w-8" />
                  </a>
                  <a
                    href="mailto:AAAA@aol.com"
                    className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors duration-300"
                  >
                    <Mail className="h-8 w-8" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={this_is_fine}
                  alt="Profile"
                  className="rounded-full w-64 h-64 border-4 border-[#00FF00] shadow-lg shadow-[#00FF00]/20 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">About Me</h2>
          <p className="mb-4">
            As a cybersecurity professional with 13 years of experience and 8 of those focused on security engineering
            and SOC Operations, I specialize in computer security, automation, cloud environments, SIEM architecture,
            and technical writing for enterprise-level organizations. My approach focuses on best practices and
            implementing defense-in-depth strategies to ensure comprehensive protection.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-white">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Infrastructure Automation",
              "Cloud Security",
              "SIEM Engineering & Optimization",
              "DevSecOps & CI/CD Automation",
              "Security Monitoring & Alerting",
              "Scripting & Automation",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-[#232323] rounded-full px-3 py-1 text-sm font-semibold text-[#00FF00] border border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">ASN Geolocation Data</CardTitle>
                <CardDescription className="text-gray-400">
                  Automating data retrieval and indexing into Splunk
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-3">
                  This repository implements automatic download of MaxMind GeoLite ASN Database. This data is used to
                  enrich existing authentication logs and successfully used to identify users operating in one country
                  while claiming to be in another.
                </p>
                <a
                  href="https://github.com/jleon757/asn-geolocation-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors duration-300 font-medium"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>
            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Splunk MCP + Boss of the SOC</CardTitle>
                <CardDescription className="text-gray-400">Utilizing Splunk MCP to query BOTS data</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  Building out the Splunk MCP to query BOTS data. This is a tool that allows me to query the BOTS data
                  and leverage the MCP to build out dashboards and alerts.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="certifications" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <img
                      src="https://www.bryanmorrison.tech/certs/certification-splunk-enterprise-certified-architect.png"
                      alt="Splunk Certified Architect"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[#00FF00] font-semibold text-lg mb-2">Splunk Certified Architect</h3>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <img
                      src="https://www.bryanmorrison.tech/certs/splunk-enterprise-certified-admin.png"
                      alt="Splunk Certified Admin"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[#00FF00] font-semibold text-lg mb-2">Splunk Certified Admin</h3>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 rounded-lg overflow-hidden">
                    <img
                      src="https://appliedtechnologyacademy.com/wp-content/uploads/2024/03/cissp-logo-1.webp"
                      alt="CISSP Certification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[#00FF00] font-semibold text-lg mb-2">CISSP</h3>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <img
                      src="https://www.bryanmorrison.tech/certs/tines_core_cert.png"
                      alt="Tines Core Certification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[#00FF00] font-semibold text-lg mb-2">Tines Core Certification</h3>
              </CardContent>
            </Card>

            <Card className="bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 relative">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <img
                      src="https://www.bryanmorrison.tech/certs/cribl_certified_user_badge.png"
                      alt="Cribl Certified User"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[#00FF00] font-semibold text-lg mb-2">Cribl - Certified User</h3>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="currently-learning" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-[#00FF00] inline-block text-white">
            Currently Learning
          </h2>
          <Card className="mb-6 bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-lg">Security Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 pt-0">
              <ul className="list-disc pl-5">
                <li>
                  Reading through:{" "}
                  <a
                    href="https://quesma.com/blog-detail/5-grafana-docker-examples-to-get-started-with-metrics-logs-and-traces"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors duration-300"
                  >
                    5 Grafana in Docker examples to get started with metrics, logs, and traces.
                  </a>
                </li>
                <li>
                  Yet to read:{" "}
                  <a
                    href="https://trunk.io/blog/beyond-the-editor-bringing-ai-to-the-rest-of-your-dev-workflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors duration-300"
                  >
                    Bringing AI to the rest of your dev workflow
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6 bg-[#232323] border-[#2A2A2A] hover:border-[#00FF00]/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white text-lg">IAM</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 pt-0">
              <ul className="list-disc pl-5">
                <li>
                  Testing out{" "}
                  <a
                    href="https://sgnl.ai/product/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors duration-300"
                  >
                    SGNL&apos;s AI platform
                  </a>{" "}
                  for eliminating accounts with standing privilege.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

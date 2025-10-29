export default function GDPRPage() {
    return (
      <div className="min-h-screen bg-[#081826] text-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-3xl font-bold text-white mb-6">GDPR & Privacy Policy</h1>
  
          <p className="text-slate-300 mb-6">
            Flight Sim Central (“we”, “us”, “our”) is committed to protecting your personal data and
            ensuring transparency about how it is used.
          </p>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">1. Data Controller</h2>
          <p className="text-slate-300 mb-4">
            The data controller responsible for your information is the Flight Sim Central Admin Team.
            Contact us at <a href="mailto:admin@flightsimcentral.org" className="text-[#F5C518]">admin@flightsimcentral.org</a>.
          </p>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">2. Data We Collect</h2>
          <ul className="list-disc list-inside text-slate-300 mb-4">
            <li>Basic profile information (username, email, IVAO ID)</li>
            <li>Flight and activity logs through NewSky integration</li>
            <li>Event participation data (for awards and records)</li>
            <li>Communications via Discord or contact forms</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">3. Why We Collect It</h2>
          <ul className="list-disc list-inside text-slate-300 mb-4">
            <li>To operate your VA account and log flights</li>
            <li>To issue awards, track stats, and maintain leaderboards</li>
            <li>To improve events, training, and platform performance</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">4. Data Sharing</h2>
          <p className="text-slate-300 mb-4">
            We never sell data. Some data may be shared with integrated platforms such as NewSky and IVAO solely
            to maintain functionality and verify pilot activity.
          </p>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">5. Your Rights</h2>
          <ul className="list-disc list-inside text-slate-300 mb-4">
            <li>Access and receive a copy of your data</li>
            <li>Request corrections or deletion (“right to be forgotten”)</li>
            <li>Withdraw consent at any time</li>
          </ul>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">6. Data Retention</h2>
          <p className="text-slate-300 mb-4">
            Data is retained while your account remains active or as required by operational or legal obligations.
          </p>
  
          <h2 className="text-xl font-semibold text-white mt-8 mb-2">7. Contact</h2>
          <p className="text-slate-300 mb-4">
            To exercise your rights or raise questions, contact us at{" "}
            <a href="mailto:privacy@flightsimcentral.org" className="text-[#F5C518]">
              privacy@flightsimcentral.org
            </a>.
          </p>
  
          <div className="mt-12">
            <a
              href="/"
              className="inline-block px-5 py-3 rounded-xl font-semibold text-slate-900"
              style={{ backgroundColor: "#F5C518" }}
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
  
"use client";

import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        <p>
          Have a work in mind? <br className="sm:block hidden" />
        </p>
        Let’s build something together!
      </p>
      <Link href="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
